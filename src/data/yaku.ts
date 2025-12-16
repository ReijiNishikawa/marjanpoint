export type Yaku = {
  name: string
  hanClosed: number | 'yakuman'
  hanOpen?: number | 'yakuman'
  note?: string
}

export const yakuList: Yaku[] = [
  { name: 'リーチ', hanClosed: 1, note: '門前のみ' },
  { name: '一発', hanClosed: 1, note: '立直後1巡以内' },
  { name: '門前清自摸和', hanClosed: 1, note: '門前のみ' },
  { name: '断么九', hanClosed: 1 },
  { name: '平和', hanClosed: 1, note: '門前のみ' },
  { name: '一盃口', hanClosed: 1, note: '門前のみ' },
  { name: '役牌', hanClosed: 1, hanOpen: 1, note: '場風/自風/白發中' },
  { name: '海底摸月・河底撈魚', hanClosed: 1, hanOpen: 1 },
  { name: '嶺上開花・槍槓', hanClosed: 1, hanOpen: 1 },
  { name: 'ダブル立直', hanClosed: 2, note: '門前のみ' },
  { name: '三色同順', hanClosed: 2, hanOpen: 1, note: '食い下がりあり' },
  { name: '一気通貫', hanClosed: 2, hanOpen: 1, note: '食い下がりあり' },
  { name: '三色同刻', hanClosed: 2, hanOpen: 2 },
  { name: '対々和', hanClosed: 2, hanOpen: 2 },
  { name: '三暗刻', hanClosed: 2, hanOpen: 2 },
  { name: '七対子', hanClosed: 2, note: '門前のみ' },
  { name: '混全帯么九', hanClosed: 2, hanOpen: 1, note: '食い下がりあり' },
  { name: '三槓子', hanClosed: 2, hanOpen: 2 },
  { name: '小三元', hanClosed: 2, hanOpen: 2 },
  { name: '混一色', hanClosed: 3, hanOpen: 2, note: '鳴きは1翻食い下がり' },
  { name: '純全帯么九', hanClosed: 3, hanOpen: 2, note: '食い下がりあり' },
  { name: '二盃口', hanClosed: 3, note: '門前のみ' },
  { name: '清一色', hanClosed: 6, hanOpen: 5, note: '鳴きは1翻食い下がり' },
  { name: '混老頭', hanClosed: 2, hanOpen: 2, note: '実質 役牌×2 のみ' },
  { name: '国士無双', hanClosed: 'yakuman', note: '役満 / 門前のみ' },
  { name: '大三元', hanClosed: 'yakuman' },
  { name: '四暗刻', hanClosed: 'yakuman', note: '単騎待ちはダブル役満扱いの場合あり' },
  { name: '字一色', hanClosed: 'yakuman' },
  { name: '小四喜', hanClosed: 'yakuman' },
  { name: '大四喜', hanClosed: 'yakuman' },
  { name: '清老頭', hanClosed: 'yakuman' },
  { name: '緑一色', hanClosed: 'yakuman' },
  { name: '九蓮宝燈', hanClosed: 'yakuman', note: '純正はダブル役満扱いの場合あり' },
  { name: '天和', hanClosed: 'yakuman' },
  { name: '地和', hanClosed: 'yakuman' },
]
