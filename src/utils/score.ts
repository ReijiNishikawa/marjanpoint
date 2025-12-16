export type GameType = 'three' | 'four'
export type Role = 'parent' | 'child'
export type WinType = 'ron' | 'tsumo'

export interface PaymentBreakdown {
  label: string
  amount: number
}

export interface ScoreResult {
  rawBase: number
  base: number
  limitLabel?: string
  payments: PaymentBreakdown[]
}

const round100 = (value: number) => Math.ceil(value / 100) * 100

const cappedBase = (fu: number, han: number) => {
  const rawBase = fu * Math.pow(2, han + 2)

  if (han >= 13) return { rawBase, base: 8000, label: '役満' }
  if (han >= 11) return { rawBase, base: 6000, label: '三倍満' }
  if (han >= 8) return { rawBase, base: 4000, label: '倍満' }
  if (han >= 6) return { rawBase, base: 3000, label: '跳満' }
  if (han === 5) return { rawBase, base: 2000, label: '満貫' }
  if (han === 4 && fu >= 40) return { rawBase, base: 2000, label: '満貫' }
  if (han === 3 && fu >= 70) return { rawBase, base: 2000, label: '満貫' }
  if (rawBase >= 2000) return { rawBase, base: 2000, label: '満貫（切り上げ）' }

  return { rawBase, base: rawBase, label: undefined }
}

export const calculateScore = (
  gameType: GameType,
  role: Role,
  winType: WinType,
  fu: number,
  han: number,
): ScoreResult => {
  const { rawBase, base, label } = cappedBase(fu, han)
  const payments: PaymentBreakdown[] = []

  if (winType === 'ron') {
    const amount = round100(base * (role === 'parent' ? 6 : 4))
    const ronLabel =
      gameType === 'four'
        ? role === 'parent'
          ? '親ロン支払い点'
          : '子ロン支払い点'
        : 'ロン支払い点（放銃者1人が全額）'

    payments.push({ label: ronLabel, amount })
  } else {
    if (role === 'parent') {
      const each = round100(base * 2)
      payments.push({
        label: gameType === 'four' ? '各支払い（3人）' : '各支払い（2人）',
        amount: each,
      })
    } else {
      const parentPay = round100(base * 2)
      const childPay = round100(base * 1)
      payments.push({ label: '親の支払い', amount: parentPay })
      payments.push({
        label:
          gameType === 'four' ? '子の支払い' : 'もう一人の子の支払い',
        amount: childPay,
      })
    }
  }

  return { rawBase, base, limitLabel: label, payments }
}
