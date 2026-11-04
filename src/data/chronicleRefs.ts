// src/data/chronicleRefs.ts
// 成長の書 — 課題ごとの根拠資料(熟読用)
//
// キーは「等級id:カテゴリ名:課題の番号(0から)」。chronicleData.ts の課題の並びと対応する。
// 課題を足したり並べ替えたりしたときは、ここのキーも合わせて直すこと。
//
// 資料の種類(k)
//   法令      … e-Gov 法令検索の条文
//   公的資料  … 省庁・公的機関・学会等のガイドライン、通知
//   倫理綱領  … 職能団体の倫理基準
//   研究      … 査読つき論文(メタ分析を優先)
//   専門書    … 理解を深めるための書籍
//
// note … その課題の内容について、根拠の強さや注意点。
//   「成長の書の独自の整理」「実践知(研究の裏づけは限られる)」などを明記する。
// 2026-11-04 に各資料の所在を確認(URLのないものは書誌情報のみ)。
// 法令は e-Gov 法令検索、e-Gov の番号を確認できなかったもの(医師法・個人情報保護法)は法務省「日本法令外国語訳データベース」の日本語条文へリンク。

export type RefKind = '法令' | '公的資料' | '倫理綱領' | '研究' | '専門書'
export interface Ref { k: RefKind; t: string; u?: string; read?: string }
export interface TaskRefs { refs: Ref[]; note?: string }

// ── 共通で使う資料 ─────────────────────────────────────────
const R = {
  // 法令
  cpLaw: { k: '法令', t: '公認心理師法(平成27年法律第68号)', u: 'https://laws.e-gov.go.jp/law/427AC0000000068', read: '第2条(業務)、第40条(信用失墜行為の禁止)、第41条(秘密保持義務)、第42条(連携・主治の医師の指示)' },
  cpDoctor: { k: '公的資料', t: '文部科学省・厚生労働省「公認心理師法第42条第2項に係る主治の医師の指示に関する運用基準について」(2018年)', u: 'https://www.mhlw.go.jp/content/001671128.pdf', read: '主治医の有無の確認と、指示を受けるときの手順' },
  doctorLaw: { k: '法令', t: '医師法 第17条(医師でなければ医業をしてはならない)', u: 'https://www.japaneselawtranslation.go.jp/ja/laws/view/3992/ja' },
  childAbuse: { k: '法令', t: '児童虐待の防止等に関する法律 第6条(通告義務)', u: 'https://laws.e-gov.go.jp/law/412AC1000000082', read: '「虐待を受けたと思われる児童」を発見した者に通告義務。守秘義務は通告を妨げない(同条3項)' },
  elderAbuse: { k: '法令', t: '高齢者虐待の防止、高齢者の養護者に対する支援等に関する法律 第7条・第21条', u: 'https://laws.e-gov.go.jp/law/417AC1000000124', read: '生命・身体に重大な危険がある場合は通報義務、それ以外は努力義務' },
  disabAbuse: { k: '法令', t: '障害者虐待の防止、障害者の養護者に対する支援等に関する法律 第7条・第16条・第22条', u: 'https://laws.e-gov.go.jp/law/423AC1000000079', read: '虐待を受けたと思われる障害者を発見した者に通報義務(養護者・施設従事者・使用者で通報先が異なる)' },
  dvLaw: { k: '法令', t: '配偶者からの暴力の防止及び被害者の保護等に関する法律 第6条', u: 'https://laws.e-gov.go.jp/law/413AC1000000031', read: '発見者の通報は努力義務、医療関係者は任意(本人の意思を尊重するよう努める)' },
  piLaw: { k: '法令', t: '個人情報の保護に関する法律 第27条(第三者提供の制限)', u: 'https://www.japaneselawtranslation.go.jp/ja/laws/view/130/ja', read: '本人の同意がなくても提供できる場合(法令に基づく場合、生命・身体の保護のため同意を得ることが困難な場合など)' },
  ppcGuide: { k: '公的資料', t: '個人情報保護委員会「個人情報の保護に関する法律についてのガイドライン(通則編)」', u: 'https://www.ppc.go.jp/personalinfo/legal/guidelines_tsusoku/', read: '要配慮個人情報、安全管理措置、委託と第三者提供の違い' },
  ppcAi: { k: '公的資料', t: '個人情報保護委員会「生成AIサービスの利用に関する注意喚起等」(2023年6月2日)', u: 'https://www.ppc.go.jp/news/press/2023/230602kouhou/', read: '個人情報を入力する場合の注意点' },
  // 倫理
  jsccp: { k: '倫理綱領', t: '日本臨床心理士会「倫理綱領」', u: 'https://www.jsccp.jp/about/pdf/sta_5_rinrikouryo20170515.pdf', read: '心理職の倫理の基準として参照(公認心理師の団体の綱領ではない点に注意)' },
  apaEthics: { k: '倫理綱領', t: 'APA「Ethical Principles of Psychologists and Code of Conduct」', u: 'https://www.apa.org/ethics/code', read: '3.05 多重関係、4 プライバシーと秘密保持、10.01 治療へのインフォームドコンセント' },
  kanazawa: { k: '専門書', t: '金沢吉展『臨床心理学の倫理をまなぶ』東京大学出版会, 2006', read: '多重関係・秘密保持・インフォームドコンセントを日本の文脈で整理' },
  gutheil: { k: '研究', t: 'Gutheil & Gabbard (1993) The concept of boundaries in clinical practice. American Journal of Psychiatry, 150(2)', u: 'https://pubmed.ncbi.nlm.nih.gov/8422069/', read: '境界の「越え(crossing)」と「侵害(violation)」の区別' },
  // オンライン・テキスト
  apaTele: { k: '公的資料', t: 'APA「遠隔心理学(テレサイコロジー)実践のためのガイドライン」(2013)日本語訳・日本心理学会', u: 'https://psych.or.jp/special/covid19/telepsychology/guidelines_for_the_practice_of_telepsychology', read: '日本語で読める。環境の確認、緊急時の計画、通信の安全' },
  apaRecord: { k: '公的資料', t: 'APA「Record Keeping Guidelines」', u: 'https://www.apa.org/practice/guidelines/record-keeping', read: '記録の目的・内容・保管・廃棄' },
  snsHb: { k: '専門書', t: '杉原保史・宮田智基 編著『SNSカウンセリング・ハンドブック』誠信書房, 2019', read: '文字のやり取りでの見立て・応答・危機対応' },
  snsCb: { k: '専門書', t: '杉原保史 監修『SNSカウンセリング・ケースブック』誠信書房, 2020', read: '事例で学ぶ文字での応答' },
  suler: { k: '研究', t: 'Suler (2004) The online disinhibition effect. CyberPsychology & Behavior, 7(3)', u: 'https://pubmed.ncbi.nlm.nih.gov/15257832/', read: '文字のやり取りで反応が強く出やすい仕組み' },
  // 関係・技法
  rogers: { k: '研究', t: 'Rogers (1957) The necessary and sufficient conditions of therapeutic personality change. Journal of Consulting Psychology, 21(2)', u: 'https://doi.org/10.1037/h0045357', read: '共感的理解・無条件の肯定的関心・一致' },
  norcross: { k: '専門書', t: 'Norcross & Lambert 編『Psychotherapy Relationships That Work』(3rd ed.) Oxford University Press, 2019', read: '共感・肯定的関心・同盟・亀裂の修復などのメタ分析' },
  hill: { k: '専門書', t: 'Hill, C. E.『Helping Skills: Facilitating Exploration, Insight, and Action』(5th ed.) APA, 2020', read: '探索→洞察→行動の3段階と、各段階の技法' },
  ivey: { k: '専門書', t: 'アイビイ『マイクロカウンセリング』福原眞知子ほか訳, 川島書店, 1985', read: '技法の階層表(かかわり行動→基本的傾聴→積極技法)' },
  kokubu: { k: '専門書', t: '國分康孝『カウンセリングの技法』誠信書房, 1979' },
  dejong: { k: '専門書', t: 'ディヤング＆バーグ『解決のための面接技法 第4版』金剛出版, 2016', read: '解決志向の質問(例外・スケーリング・ミラクルクエスチョン)' },
  shimoyama: { k: '専門書', t: '下山晴彦『臨床心理アセスメント入門』金剛出版, 2008', read: '初回面接での情報収集と見立ての組み立て' },
  kazantzis: { k: '研究', t: 'Kazantzis et al. (2016) Quantity and quality of homework compliance: A meta-analysis of relations with outcome in cognitive behavior therapy. Behavior Therapy, 47(5)', u: 'https://doi.org/10.1016/j.beth.2016.05.002', read: 'ホームワークへの取り組みと治療結果の関連' },
  // 危機対応
  takahashi: { k: '専門書', t: '高橋祥友『自殺の危険 臨床的評価と危機介入 第4版』金剛出版, 2022', read: '危険因子の全体像と、面接での確認の仕方' },
  gatekeeper: { k: '公的資料', t: '厚生労働省 自殺対策推進室「ゲートキーパー養成研修 講師用テキスト」(2025年3月)', u: 'https://www.mhlw.go.jp/mamorouyokokoro/assets/pdf/fy2024_gatekeeper_instructor_textbook.pdf', read: '気づき・傾聴・つなぎ・見守りの基本' },
  stanley: { k: '研究', t: 'Stanley & Brown (2012) Safety Planning Intervention: A brief intervention to mitigate suicide risk. Cognitive and Behavioral Practice, 19(2)', read: '安全計画の6つの段階(警告サイン、自分でできる対処、人や場所、助けを求める人、専門機関、手段の制限)' },
  rudd: { k: '研究', t: 'Rudd, Mandrusiak & Joiner (2006) The case against no-suicide contracts: The commitment to treatment statement as a practice alternative. Journal of Clinical Psychology, 62(2)', u: 'https://digitalcommons.memphis.edu/facpubs/8687', read: '「自殺しない約束」には効果の裏づけが乏しいこと' },
  // 自己理解・逆転移
  hayesCt: { k: '研究', t: 'Hayes, Gelso, Goldberg & Kivlighan (2018) Countertransference management and effective psychotherapy: Meta-analytic findings. Psychotherapy, 55(4)', u: 'https://pubmed.ncbi.nlm.nih.gov/30335461/', read: '逆転移の扱い方と治療結果の関連' },
  gelso: { k: '専門書', t: 'Gelso & Hayes『Countertransference and the Therapist\'s Inner Experience』Erlbaum, 2007', read: '古典的・全体的・統合的な逆転移の定義の違い' },
  heimann: { k: '研究', t: 'Heimann (1950) On counter-transference. International Journal of Psycho-Analysis, 31', read: '逆転移を「理解の道具」として捉え直した論文' },
  winnicott: { k: '研究', t: 'Winnicott (1949) Hate in the counter-transference. International Journal of Psycho-Analysis, 30' },
  hook: { k: '研究', t: 'Hook et al. (2013) Cultural humility: Measuring openness to culturally diverse clients. Journal of Counseling Psychology, 60(3)', u: 'https://doi.org/10.1037/a0032595', read: '自分の価値観を前提にしない姿勢(文化的謙虚さ)' },
  // 技法(CBT・ACT・MI・TIC・BPS)
  beck: { k: '専門書', t: 'Beck, J. S.『Cognitive Behavior Therapy: Basics and Beyond』(3rd ed.) Guilford, 2020' },
  mhlwCbt: { k: '公的資料', t: '厚生労働省「うつ病の認知療法・認知行動療法 治療者用マニュアル」', u: 'https://www.mhlw.go.jp/bunya/shougaihoken/kokoro/dl/01.pdf' },
  hayesAct: { k: '専門書', t: 'Hayes, Strosahl & Wilson『Acceptance and Commitment Therapy』(2nd ed.) Guilford, 2012', read: '脱フュージョン・価値・アクセプタンスなどの6つのプロセス' },
  harrisAct: { k: '専門書', t: 'ラス・ハリス『ACTをはじめる』星和書店, 2012' },
  mi: { k: '専門書', t: 'ミラー＆ロルニック『動機づけ面接〈第3版〉上・下』星和書店, 2019', read: '両価性、チェンジトーク、引き出す・聞き返す' },
  samhsa: { k: '公的資料', t: 'SAMHSA (2014)「SAMHSA\'s Concept of Trauma and Guidance for a Trauma-Informed Approach」', u: 'https://ncsacw.acf.hhs.gov/userfiles/files/SAMHSA_Trauma.pdf', read: '6つの原則(安全、信頼性と透明性、ピアサポート、協働、エンパワメントと選択、文化・歴史・ジェンダー)' },
  harrisFallot: { k: '専門書', t: 'Harris & Fallot 編 (2001) Using Trauma Theory to Design Service Systems. New Directions for Mental Health Services, 89', read: '安全・信頼・選択・協働・エンパワメントの5つの価値' },
  engel: { k: '研究', t: 'Engel (1977) The need for a new medical model: A challenge for biomedicine. Science, 196', u: 'https://pubmed.ncbi.nlm.nih.gov/847460/', read: '生物心理社会モデルの原典' },
  // 同盟・亀裂
  bordin: { k: '研究', t: 'Bordin (1979) The generalizability of the psychoanalytic concept of the working alliance. Psychotherapy: Theory, Research & Practice, 16(3)', u: 'https://doi.org/10.1037/h0085885', read: '目標・課題・絆の3要素' },
  fluckiger: { k: '研究', t: 'Flückiger et al. (2018) The alliance in adult psychotherapy: A meta-analytic synthesis. Psychotherapy, 55(4)', u: 'https://www.societyforpsychotherapy.org/wp-content/uploads/2018/10/Fluckiger-et-al-2018.pdf', read: '全文を無料で読める。同盟と治療結果の関連(r≒.28)' },
  safran: { k: '専門書', t: 'Safran & Muran『Negotiating the Therapeutic Alliance: A Relational Treatment Guide』Guilford, 2000', read: '引きこもり型・対立型の亀裂と、メタコミュニケーションによる修復' },
  eubanks: { k: '研究', t: 'Eubanks, Muran & Safran (2018) Alliance rupture repair: A meta-analysis. Psychotherapy, 55(4)', u: 'https://doi.org/10.1037/pst0000185', read: '亀裂の修復と治療結果の関連(中程度)。「亀裂がない関係より良い」とまでは示していない' },
  // スーパービジョン・成長
  stoltenberg: { k: '専門書', t: 'Stoltenberg & McNeill『IDM Supervision』(3rd ed.) Routledge, 2010', read: '統合発達モデルのレベル1〜3iと、レベルごとの関わり方' },
  ronnestad: { k: '研究', t: 'Rønnestad & Skovholt (2003) The journey of the counselor and therapist. Journal of Career Development, 30(1)', u: 'https://sv.uio.no/psi/personer/vit/emeritus/helgero/JourneyarticleJCD.pdf', read: '全文を無料で読める。心理職の成長の段階と、成長を支えるもの' },
  bernard: { k: '専門書', t: 'Bernard & Goodyear『Fundamentals of Clinical Supervision』(6th ed.) Pearson, 2019', read: 'スーパービジョンとコンサルテーションの違い' },
  falender: { k: '専門書', t: 'Falender & Shafranske『Clinical Supervision: A Competency-Based Approach』APA, 2004', read: '行動で定義する能力基準(コンピテンシー)' },
  rousmaniere: { k: '専門書', t: 'Rousmaniere『Deliberate Practice for Psychotherapists』Routledge, 2017', read: '録音・振り返り・フィードバックをくり返す「意図的な練習」' },
  edmondson: { k: '研究', t: 'Edmondson (1999) Psychological safety and learning behavior in work teams. Administrative Science Quarterly, 44(2)', u: 'https://doi.org/10.2307/2666999' },
  polanyi: { k: '専門書', t: 'ポランニー『暗黙知の次元』ちくま学芸文庫, 2003' },
  figley: { k: '専門書', t: 'Figley 編『Compassion Fatigue』Brunner/Mazel, 1995' },
  proqol: { k: '公的資料', t: 'ProQOL(Professional Quality of Life)公式サイト', u: 'https://proqol.org/', read: '共感満足・バーンアウト・二次的外傷性ストレスのセルフチェック' },
  skovholt: { k: '専門書', t: 'Skovholt & Trotter-Mathison『The Resilient Practitioner』(3rd ed.) Routledge, 2016' },
  apaEbp: { k: '研究', t: 'APA Presidential Task Force on Evidence-Based Practice (2006) Evidence-based practice in psychology. American Psychologist, 61(4)', u: 'https://pubmed.ncbi.nlm.nih.gov/16719673/', read: '研究・臨床的専門性・クライアントの特性と選好の統合' },
} satisfies Record<string, Ref>

const ORIGINAL = '成長の書の独自の整理です。研究や原典で定められた基準ではないので、根拠資料は「考え方の土台」として読んでください。'
const PRACTICE = '実践知(経験からの工夫)で、研究による裏づけは限られます。一律の決まりとしてではなく、目安として使ってください。'

export const TASK_REFS: Record<string, TaskRefs> = {
  // ===== Lv.1 =====
  'lv1:バウンダリー（境界線）:0': { refs: [R.cpLaw, R.apaEthics, R.kanazawa] },
  'lv1:バウンダリー（境界線）:1': { refs: [R.kanazawa, R.cpLaw] },
  'lv1:バウンダリー（境界線）:2': { refs: [R.gutheil, R.apaTele, R.kanazawa], note: '「例外を一切作らない」は運用上の方針です。境界の「越え」がすべて有害なわけではなく、記録と相談のうえで判断する、というのが文献の立場です。' },
  'lv1:バウンダリー（境界線）:3': { refs: [R.gutheil, R.apaEthics, R.kanazawa] },
  'lv1:バウンダリー（境界線）:4': { refs: [R.hayesCt, R.gelso] },
  'lv1:コンプライアンス（安全条項）:0': { refs: [R.doctorLaw, R.cpLaw, R.cpDoctor] },
  'lv1:コンプライアンス（安全条項）:1': { refs: [R.cpLaw, R.childAbuse, R.disabAbuse, R.elderAbuse, R.dvLaw, R.piLaw, R.jsccp], note: '通告・通報の義務は、児童・障害者・高齢者・DVで、根拠法も「義務か努力義務か」も違います。法律ごとに分けて覚えてください。' },
  'lv1:コンプライアンス（安全条項）:2': { refs: [R.cpLaw, R.apaTele, R.gatekeeper] },
  'lv1:コンプライアンス（安全条項）:3': { refs: [R.piLaw, R.ppcGuide, R.ppcAi, R.apaRecord] },
  'lv1:コンプライアンス（安全条項）:4': { refs: [R.cpLaw, R.apaEthics], note: '「信用失墜行為の禁止」(公認心理師法第40条)と多重関係の考え方を、SNSに当てはめた整理です。' },
  'lv1:運用スキル:0': { refs: [R.apaTele], note: PRACTICE },
  'lv1:運用スキル:1': { refs: [R.apaTele] },
  'lv1:運用スキル:2': { refs: [R.apaTele], note: PRACTICE },
  // ===== Lv.2 =====
  'lv2:マインド:0': { refs: [R.hill, R.rogers] },
  'lv2:マインド:1': { refs: [R.rogers, R.norcross] },
  'lv2:マインド:2': { refs: [R.apaTele, R.norcross] },
  'lv2:マインド:3': { refs: [R.hayesCt, R.gelso] },
  'lv2:マインド:4': { refs: [R.apaEthics, R.kanazawa, R.apaTele] },
  'lv2:スキル:0': { refs: [R.hill, R.ivey], note: '「導入→主訴明確化→探索→要約→合意→クロージング」は成長の書の運用上の型です。Hill の3段階モデルなどが土台になります。' },
  'lv2:スキル:1': { refs: [R.shimoyama, R.engel] },
  'lv2:スキル:2': { refs: [R.rogers, R.norcross, R.ivey] },
  'lv2:スキル:3': { refs: [R.ivey, R.hill, R.mi] },
  'lv2:スキル:4': { refs: [R.snsHb, R.snsCb], note: PRACTICE },
  'lv2:知識:0': { refs: [R.hill, R.kanazawa] },
  'lv2:知識:1': { refs: [R.ivey, R.kokubu, R.hill] },
  'lv2:知識:2': { refs: [R.dejong, R.beck] },
  'lv2:知識:3': { refs: [R.apaRecord, R.ppcGuide] },
  'lv2:知識:4': { refs: [R.apaEthics, R.kanazawa] },
  'lv2:セッション終了スキル:0': { refs: [R.kazantzis, R.beck] },
  // ===== Lv.3 =====
  'lv3:マインド（自己安定）:0': { refs: [R.gatekeeper, R.takahashi] },
  'lv3:マインド（自己安定）:1': { refs: [R.hayesCt, R.rousmaniere] },
  'lv3:マインド（自己安定）:2': { refs: [R.takahashi, R.hill] },
  'lv3:マインド（自己安定）:3': { refs: [R.rousmaniere, R.ronnestad] },
  'lv3:マインド（自己安定）:4': { refs: [R.bernard, R.cpLaw] },
  'lv3:スキル（型の維持＋技法の初期実装）:0': { refs: [R.hook, R.apaEthics] },
  'lv3:スキル（型の維持＋技法の初期実装）:1': { refs: [R.beck, R.mhlwCbt], note: '思考・感情・行動・身体の4つに分ける整理は、CBTでよく使われる方法の一つです(状況・環境を加える整理もあります)。唯一の標準モデルではありません。' },
  'lv3:スキル（型の維持＋技法の初期実装）:2': { refs: [R.hayesAct, R.harrisAct] },
  'lv3:スキル（型の維持＋技法の初期実装）:3': { refs: [R.mi] },
  'lv3:スキル（型の維持＋技法の初期実装）:4': { refs: [R.suler, R.safran, R.snsHb] },
  'lv3:スキル（型の維持＋技法の初期実装）:5': { refs: [R.cpLaw, R.cpDoctor] },
  'lv3:スキル（型の維持＋技法の初期実装）:6': { refs: [R.childAbuse, R.disabAbuse, R.elderAbuse, R.dvLaw], note: 'DVは通報の「努力義務」で、児童虐待・障害者虐待の「義務」とは違います。高齢者虐待は、生命・身体に重大な危険がある場合だけが義務です。' },
  'lv3:知識:0': { refs: [R.apaEbp, R.beck, R.hayesAct, R.mi] },
  'lv3:知識:1': { refs: [R.samhsa, R.harrisFallot], note: '課題の5項目は Harris & Fallot(2001)の5つの価値にあたります。SAMHSA(2014)はこれに、ピアサポートと、文化・歴史・ジェンダーへの配慮を加えた6原則で整理しています。' },
  'lv3:知識:2': { refs: [R.engel, R.shimoyama] },
  'lv3:知識:3': { refs: [R.apaTele, R.snsHb, R.stanley] },
  // ===== Lv.4 =====
  'lv4:マインド（見立て視点）:0': { refs: [R.safran, R.eubanks] },
  'lv4:マインド（見立て視点）:1': { refs: [R.safran, R.hayesCt] },
  'lv4:マインド（見立て視点）:2': { refs: [R.eubanks, R.safran], note: '修復と良い治療結果には関連がありますが、「亀裂がなかった関係より深くなる」とまでは示されていません。' },
  'lv4:マインド（見立て視点）:3': { refs: [R.snsHb, R.apaTele], note: PRACTICE },
  'lv4:マインド（見立て視点）:4': { refs: [R.bernard, R.falender] },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:0': { refs: [R.takahashi, R.gatekeeper, R.stanley], note: '計画・手段・時期・支えの4つは確認の入口です。過去の自殺企図、精神疾患、絶望感、アルコール・薬物、喪失体験なども含めて見立て、判断は一人でせずSV・医療と共有します。' },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:1': { refs: [R.safran, R.eubanks], note: ORIGINAL + 'Safran & Muran の分類では「引きこもり型」にあたります。' },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:2': { refs: [R.safran], note: ORIGINAL + 'Safran & Muran の分類では「引きこもり型」にあたります。' },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:3': { refs: [R.safran, R.eubanks], note: ORIGINAL + 'Safran & Muran の分類では「対立型」にあたります。原典がすすめるのは、防衛せずに自分の関与を認めて相手の体験を探ることで、全面的に非を認めることではありません。' },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:4': { refs: [R.safran, R.snsHb], note: ORIGINAL + '返信がないことには、内省・疲れ・通信環境・生活の事情など、亀裂以外の理由もあります。' },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:5': { refs: [R.safran, R.mi], note: ORIGINAL },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:6': { refs: [R.safran], note: ORIGINAL },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:7': { refs: [R.safran], note: ORIGINAL + '「もう終わりにしたい」には希死念慮が含まれることもあるので、まずリスクの確認を優先します。' },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:8': { refs: [R.snsHb, R.apaTele], note: PRACTICE + '一律の時間ではなく、契約で示した目安・緊急度・その人の状態で判断します。' },
  'lv4:知識:0': { refs: [R.safran, R.eubanks] },
  'lv4:知識:1': { refs: [R.safran], note: '7類型は成長の書の独自の観察分類です。教えるときも「研究上の分類(引きこもり型・対立型)」と分けて伝えてください。' },
  'lv4:知識:2': { refs: [R.bordin, R.fluckiger, R.eubanks] },
  'lv4:知識:3': { refs: [R.snsHb, R.snsCb, R.suler], note: PRACTICE },
  'lv4:知識:4': { refs: [R.cpLaw, R.cpDoctor, R.takahashi] },
  // ===== Lv.5 =====
  'lv5:マインド（自己観察と後進支援）:0': { refs: [R.hayesCt, R.gelso] },
  'lv5:マインド（自己観察と後進支援）:1': { refs: [R.hook, R.bernard] },
  'lv5:マインド（自己観察と後進支援）:2': { refs: [R.heimann, R.gelso, R.hayesCt] },
  'lv5:マインド（自己観察と後進支援）:3': { refs: [R.stoltenberg, R.ronnestad] },
  'lv5:マインド（自己観察と後進支援）:4': { refs: [R.edmondson, R.bernard] },
  'lv5:スキル（介入と接続——一人で完結させない）:0': { refs: [R.stanley, R.rudd, R.takahashi], note: '「自分を傷つけない約束」を取ることと、安全計画をつくることは別物です。約束だけでは安全の裏づけになりません。' },
  'lv5:スキル（介入と接続——一人で完結させない）:1': { refs: [R.cpLaw, R.piLaw, R.gatekeeper] },
  'lv5:スキル（介入と接続——一人で完結させない）:2': { refs: [R.bernard, R.skovholt] },
  'lv5:スキル（介入と接続——一人で完結させない）:3': { refs: [R.rousmaniere, R.hayesCt] },
  'lv5:スキル（介入と接続——一人で完結させない）:4': { refs: [R.polanyi, R.rousmaniere] },
  'lv5:スキル（介入と接続——一人で完結させない）:5': { refs: [R.falender, R.bernard] },
  'lv5:知識:0': { refs: [R.gelso, R.heimann, R.winnicott, R.hayesCt] },
  'lv5:知識:1': { refs: [R.bernard, R.falender] },
  'lv5:知識:2': { refs: [R.figley, R.proqol, R.skovholt] },
  'lv5:知識:3': { refs: [R.apaEbp] },
  'lv5:知識:4': { refs: [R.stoltenberg, R.ronnestad] },
}

export function refsFor(lvId: string, cat: string, i: number): TaskRefs | undefined {
  return TASK_REFS[`${lvId}:${cat}:${i}`]
}
