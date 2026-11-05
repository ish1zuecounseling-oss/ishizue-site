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
//   研究      … 査読つき論文(メタ分析を優先)・学位論文・紀要
//   専門書    … 理解を深めるための書籍
//
// free … ネットで本文を無料で読める資料。画面では「無料で読める」を付け、先頭に並べる。
// read … その資料の読みどころ。v が「本文確認」の資料は、実際に本文を読んで書いた要点。
// note … その課題の内容について、根拠の強さや注意点。
//   「成長の書の独自の整理」「実践知(研究の裏づけは限られる)」などを明記する。
// 2026-11-04〜05 に資料を確認。確認の深さは各資料の v に記録(本文確認/所在確認/未確認)。
// refs … その課題を直接支える資料 / see … 関連はあるが、課題の文言を直接は支えない参考資料

export type RefKind = '法令' | '公的資料' | '倫理綱領' | '研究' | '専門書'
/** 資料をどこまで確かめたか(2026-11-05 時点)
 *  本文確認 … 本文(条文・通知の中身)を読んで、要点を確かめた
 *  所在確認 … 実在と書誌情報(著者・題名・掲載誌など)は確かめたが、本文は読んでいない(要旨だけ読んだものを含む)
 *  未確認   … 書誌情報も含めて、記憶にもとづいて書いている(版・年が違う可能性がある) */
export type Verify = '本文確認' | '所在確認' | '未確認'
export interface Ref {
  k: RefKind; t: string; u?: string; read?: string; v: Verify; free?: boolean
  where?: string // 読む場所(条・章・節・ページ)。ページは資料の印刷ページ(PDFのページ数とずれることがある)
  min?: number   // その場所を読むのにかかる目安(分)
  cite?: string  // 書誌で確かめられなかった点など、引用するときの注意
}

/** 課題の内容が、どの強さの根拠に支えられているか
 *  A … 法令・公的な指針・倫理綱領で定められている
 *  B … 研究(メタ分析など)で支持されている
 *  C … 専門書の見解・臨床で広く共有されている考え方
 *  D … 実践知・成長の書の独自の整理(研究の裏づけは限られる) */
export type Strength = 'A' | 'B' | 'C' | 'D'
export const STRENGTH_LABEL: Record<Strength, string> = {
  A: '法令・公的指針・倫理綱領',
  B: '研究(メタ分析など)',
  C: '専門書の見解・臨床の合意',
  D: '実践知・独自の整理',
}
/** まず読む1か所:どの資料の、どこを、何分で、何のために読むか */
export interface StartPoint { r: Ref; where?: string; min?: number; why: string }
export interface TaskRefs { level: Strength; refs: Ref[]; see?: Ref[]; note?: string; start?: StartPoint }

// ── 共通で使う資料 ─────────────────────────────────────────
const R = {
  // ── 法令 ──
  cpLaw: { k: '法令', t: '公認心理師法(平成27年法律第68号)', u: 'https://laws.e-gov.go.jp/law/427AC0000000068', free: true, v: '本文確認',
    read: '第2条 業務は4つ(①心理状態の観察・分析 ②本人への相談・助言・指導 ③関係者への相談・助言・指導 ④心の健康の知識の普及)。第40条 信用失墜行為の禁止。第41条 秘密保持(資格を失った後も続く。違反には第46条の罰則があり、告訴が必要)。第42条 1項 関係者との連携、2項 主治の医師がいるときはその指示を受ける' },
  cpDoctor: { k: '公的資料', t: '文部科学省・厚生労働省「公認心理師法第42条第2項に係る主治の医師の指示に関する運用基準について」(2018年)', u: 'https://www.mhlw.go.jp/content/001671128.pdf', free: true, read: '主治医の有無の確認と、指示を受けるときの手順', v: '本文確認' },
  doctorLaw: { k: '法令', t: '医師法 第17条(医師でなければ医業をしてはならない)', u: 'https://www.japaneselawtranslation.go.jp/ja/laws/view/3992/ja', free: true, v: '所在確認' },
  ikoui: { k: '公的資料', t: '厚生労働省 資料「AIを用いた診断、治療等の支援を行うプログラムの利用と医師法第17条の規定との関係について」', u: 'https://www.mhlw.go.jp/content/10601000/000468141.pdf', free: true, v: '本文確認',
    read: '医師法第17条の条文と、平成17年の医政局長通知による解釈を引用。「医業」=医行為を反復継続する意思をもって行うこと、「医行為」=医師の医学的判断がなければ人体に危害を及ぼす(おそれのある)行為。診断の主体は医師' },
  childAbuse: { k: '法令', t: '児童虐待の防止等に関する法律 第6条(通告義務)', u: 'https://laws.e-gov.go.jp/law/412AC1000000082', free: true, v: '本文確認',
    read: '1項「虐待を受けたと思われる児童」を発見した者は、速やかに市町村・都道府県の福祉事務所・児童相談所へ通告しなければならない。3項 守秘義務の規定は通告を妨げない' },
  elderAbuse: { k: '法令', t: '高齢者虐待の防止、高齢者の養護者に対する支援等に関する法律 第7条・第21条', u: 'https://laws.e-gov.go.jp/law/417AC1000000124', free: true, v: '本文確認',
    read: '第7条(養護者による虐待)生命・身体に重大な危険が生じている場合は市町村への通報義務(1項)、それ以外は努力義務(2項)、守秘義務は通報を妨げない(3項)。第21条(施設従事者による虐待)施設の職員は重大さを問わず通報義務、それ以外の発見者は第7条と同じ扱い' },
  disabAbuse: { k: '法令', t: '障害者虐待の防止、障害者の養護者に対する支援等に関する法律 第7条・第16条・第22条', u: 'https://laws.e-gov.go.jp/law/423AC1000000079', free: true, v: '本文確認',
    read: '発見者に通報義務。通報先は、養護者による虐待(第7条)・施設従事者による虐待(第16条)は市町村、使用者による虐待(第22条)は市町村か都道府県。18歳未満の養護者による虐待は児童虐待防止法で扱う。守秘義務は通報を妨げない(虚偽・過失による通報を除く)' },
  dvLaw: { k: '法令', t: '配偶者からの暴力の防止及び被害者の保護等に関する法律 第6条', u: 'https://laws.e-gov.go.jp/law/413AC1000000031', free: true, read: '発見者の通報は努力義務、医療関係者は任意(本人の意思を尊重するよう努める)', v: '本文確認' },
  piLaw: { k: '法令', t: '個人情報の保護に関する法律 第27条(第三者提供の制限)', u: 'https://www.japaneselawtranslation.go.jp/ja/laws/view/130/ja', free: true, read: '本人の同意がなくても提供できる場合(法令に基づく場合、生命・身体の保護のため同意を得ることが困難な場合など)', v: '所在確認' },
  ppcFaq: { k: '公的資料', t: '個人情報保護委員会 Q&A(Q7-19:人の生命・身体・財産の保護のための第三者提供)', u: 'https://www.ppc.go.jp/all_faq_index/faq1-q7-19', free: true, v: '本文確認',
    read: '第27条1項2号:生命・身体・財産の保護のために必要で、本人の同意を得ることが困難なときは、同意なく第三者に提供できる' },
  ppcMed: { k: '公的資料', t: '個人情報保護委員会・厚生労働省「医療・介護関係事業者における個人情報の適切な取扱いのためのガイダンス」', u: 'https://www.mhlw.go.jp/content/001470633.pdf', free: true, v: '本文確認',
    read: '要配慮個人情報(病歴・診療情報など)は取得・提供に原則本人の同意が要り、オプトアウトでの第三者提供はできない。委託先は趣旨に沿う事業者を選び、取扱いを定期的に確認する。対象は医療機関・介護事業者で、独立の相談室は対象として書かれていない(考え方の手本として読む)' },
  ppcGuide: { k: '公的資料', t: '個人情報保護委員会「個人情報の保護に関する法律についてのガイドライン(通則編)」', u: 'https://www.ppc.go.jp/personalinfo/legal/guidelines_tsusoku/', free: true, read: '要配慮個人情報、安全管理措置、委託と第三者提供の違い', v: '所在確認' },
  ppcAi: { k: '公的資料', t: '個人情報保護委員会「生成AIサービスの利用に関する注意喚起等」(2023年6月2日。内閣府の会議資料として掲載されたもの)', u: 'https://www8.cao.go.jp/cstp/ai/ai_team/6kai/shiryouchuuikanki.pdf', free: true, v: '本文確認',
    read: '事業者向けの2点。①個人情報を含むプロンプトの入力が、特定した利用目的の範囲内か確かめる ②本人の同意なく個人データを入力し、それが応答以外(機械学習など)に使われると法違反のおそれがあるため、サービス側が学習に使わないことを事前に確かめる' },
  // ── 倫理 ──
  jsccp: { k: '倫理綱領', t: '日本臨床心理士会「倫理綱領」', u: 'https://www.jsccp.jp/about/pdf/sta_5_rinrikouryo20170515.pdf', free: true, v: '本文確認',
    read: '第2条 秘密保持(例外は自他に危害が及ぶおそれがある場合と法による定めがある場合。録音などは同意が要る)。第3条 関係は職業上の契約の範囲に限る(多重関係を避ける)。第4条 インフォームド・コンセント(目的・技法・期間・料金を説明し、緊急時は秘密保持を超えることがあると事前に伝える。記録は最後の面接から5年保存)。第5条 自分の能力の範囲を守る。※公認心理師の団体の綱領ではない' },
  jacppCode: { k: '倫理綱領', t: '日本公認心理師協会「倫理綱領」(2020年9月18日)', u: 'https://www.jacpp.or.jp/pdf/jacpp_rinrikoryo20200918.pdf', free: true, v: '本文確認',
    read: '公認心理師の職能団体の綱領。全12条:公共の福祉、人権の尊重と平等、信頼関係と誠実な支援(自分の欲求や利益のために支援しない)、専門性の向上と限界の自覚、秘密の保持、自立性の尊重と同意、記録と説明責任、専門的関係の範囲(それを超える関係を結ばない)、他職種との連携、研究倫理、情報発信の節度、後進の育成。※法令ではなく職能団体の倫理基準' },
  jacppGd: { k: '倫理綱領', t: '日本公認心理師協会「倫理綱領に関するガイダンス」(2021年3月20日 理事会議決)', u: 'https://www.jacpp.or.jp/mypage/pdf/rinri-guidance.pdf', free: true, v: '本文確認',
    read: '綱領の条ごとの解説。インフォームド・コンセントで説明する内容(目的・形態・技法・料金・期間・予想される利益とリスク・守秘とその限界・緊急時対応・記録の保管と廃棄)と、同意が成り立つ3条件(十分な情報・本人の意志・同意能力)。記録は終了後5年を目安に保管、本人の開示請求には基本的に応じる。秘密保持の限界は①本人の承諾 ②法令(虐待の通告・通報など。強制か任意の照会かを区別し根拠条文を確かめる) ③自他への危害(重大・差し迫っている・相手が特定できる)で、開示は必要最小限。多重関係は原則として避け、贈り物などは利益と影響を検討して判断。連携は原則として本人の説明と同意、緊急で事前に得られないときは事後に説明。主治医の指示は「密接な連携」の意味で、医行為の分担ではない' },
  apaEthics: { k: '倫理綱領', t: 'APA「Ethical Principles of Psychologists and Code of Conduct」', u: 'https://www.apa.org/ethics/code', free: true, read: '3.05 多重関係(客観性を損なう・搾取や害のおそれがあるものを避ける。害のおそれがない関係は非倫理的ではない)。4.02 秘密保持の限界を最初に説明する(電子的なサービスではプライバシーのリスクも)。4.03 録音・録画には許可が要る。4.05 同意なしの開示は法の要請や害の防止などに限る。10.01 治療の性質・見通し・料金・秘密保持の限界を早い段階で説明する', v: '本文確認' },
  kanazawa: { k: '専門書', t: '金沢吉展『臨床心理学の倫理をまなぶ』東京大学出版会, 2006', read: '多重関係・秘密保持・インフォームドコンセントを日本の文脈で整理', v: '所在確認' },
  gutheil: { k: '研究', t: 'Gutheil & Gabbard (1993) The concept of boundaries in clinical practice. American Journal of Psychiatry, 150(2)', u: 'https://pubmed.ncbi.nlm.nih.gov/8422069/', read: '境界の「越え(crossing)」と「侵害(violation)」の区別', v: '所在確認' },
  // ── オンライン・テキスト ──
  apaTele: { k: '公的資料', t: 'APA「遠隔心理学(テレサイコロジー)実践のためのガイドライン」(2013)日本語訳・日本心理学会', u: 'https://psych.or.jp/special/covid19/telepsychology/guidelines_for_the_practice_of_telepsychology', free: true, v: '所在確認',
    read: '日本語で読める。8つのガイドライン(能力、標準的なケア、インフォームドコンセント、守秘、セキュリティと送信、データの破棄、テスト、法域をまたぐ実践)。各項目の本文はリンク先の下位ページ(本文は未確認)' },
  apaTele2: { k: '公的資料', t: 'APA 遠隔心理学ガイドライン 日本語訳「ガイドライン2. 遠隔心理支援サービスの提供における標準的なケア」(日本心理学会)', u: 'https://psych.or.jp/special/covid19/telepsychology/guidelines_for_the_practice_of_telepsychology-5', free: true, v: '本文確認',
    read: '遠隔でも対面と同じ水準を保つ。始める前に、遠隔が適切か(利点とリスク、緊急時の対応、病状など)を評価して本人に伝え、記録する。支援中も適切かを確かめ続ける。本人の側の環境(プライバシー、気が散るもの、中断の可能性)は心理士が直接管理できないので、一緒に整える。役に立たなくなったら話し合って終え、代わりの支援を紹介する。※居場所の確認など緊急時の具体的な手順までは書かれていない' },
  apaTele3: { k: '公的資料', t: 'APA 遠隔心理学ガイドライン 日本語訳「ガイドライン3. インフォームド・コンセント」(日本心理学会)', u: 'https://psych.or.jp/special/covid19/telepsychology/guidelines_for_the_practice_of_telepsychology-6', free: true, v: '本文確認',
    read: '遠隔ならではの説明事項:使う機器とソフト、技術的な問題で支援が途切れうること、情報の保存と通信の安全、境界線と連絡への対応の決まり、心理士と本人の所在地の法令の違い、料金(中断や障害のときの扱いを含む)。説明は本人が分かる言葉で、文化・言語・経済的背景に配慮する' },
  apaRecord: { k: '公的資料', t: 'APA「Record Keeping Guidelines」', u: 'https://www.apa.org/practice/guidelines/record-keeping', free: true, read: '記録の目的・内容・保管・廃棄', v: '所在確認' },
  snsGl: { k: '公的資料', t: '厚生労働省(補助事業)「自殺対策におけるSNS相談事業(チャット・スマホアプリ等を活用した文字による相談事業)ガイドライン」(平成30年度)', u: 'https://www.mhlw.go.jp/content/12200000/000494485.pdf', free: true, v: '本文確認',
    read: '文字相談の強み(本音を話しやすい入口)と弱み(認識がずれやすい・状況把握に時間がかかる)。応答の工夫:おうむ返しの多用を避ける、短文で区切る、返信が遅れるときは先に伝える、ずれに気づいたら素直に詫びる、「なぜ」を言い換える。解決策を急がず、決めるのは相談者。死にたい気持ちは方法・時期まで率直に確かめ、手段を遠ざける。相談員は二人以上・SVと連携。守秘の例外(生命の危険)は事前に案内する' },
  tsccpNet: { k: '公的資料', t: '東京公認心理師協会 倫理委員会「インターネットを利用した専門的心理臨床業務に関する留意点」Ver.2.00', u: 'https://www.tsccp.jp/uploads/documents/202510/%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%8D%E3%83%83%E3%83%88%E3%82%92%E5%88%A9%E7%94%A8%E3%81%97%E3%81%9F%E5%B0%82%E9%96%80%E7%9A%84%E5%BF%83%E7%90%86%E8%87%A8%E5%BA%8A%E6%A5%AD%E5%8B%99%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E7%95%99%E6%84%8F%E7%82%B9Ver.2.00.pdf', free: true, v: '所在確認',
    read: '日本語でオンライン業務の留意点をまとめた職能団体の資料。所在は確認したが、サイトの設定で本文を取得できなかったため、中身は自分で読んで確かめてください' },
  presence: { k: '研究', t: '宮原契子・安藤智子 (2024)「治療的現前性—日本語版尺度の作成と遠隔カウンセリングにおける『共にいる』体験の検討—」カウンセリング研究, 57(1)', u: 'https://www.jstage.jst.go.jp/article/cou/57/1/57_1/_html/-char/ja', free: true, v: '所在確認',
    read: '要旨で確認。治療的現前性(今ここで相手と共にいる態度)の日本語版尺度を作り、オンライン面接でも測れることを示した。初回で現前性を強く感じたクライアントほど、対人的な疎外感が下がり続けた' },
  snsHb: { k: '専門書', t: '杉原保史・宮田智基 編著『SNSカウンセリング・ハンドブック』誠信書房, 2019', read: '文字のやり取りでの見立て・応答・危機対応', v: '未確認' },
  snsCb: { k: '専門書', t: '杉原保史 監修『SNSカウンセリング・ケースブック』誠信書房, 2020', read: '事例で学ぶ文字での応答', v: '所在確認' },
  suler: { k: '研究', t: 'Suler (2004) The online disinhibition effect. CyberPsychology & Behavior, 7(3)', u: 'https://pubmed.ncbi.nlm.nih.gov/15257832/', read: '文字のやり取りで反応が強く出やすい仕組み', v: '所在確認' },
  // ── 関係・技法 ──
  rogers: { k: '研究', t: 'Rogers (1957) The necessary and sufficient conditions of therapeutic personality change. Journal of Consulting Psychology, 21(2)', u: 'https://doi.org/10.1037/h0045357', read: '共感的理解・無条件の肯定的関心・一致', v: '未確認' },
  rogersEager: { k: '研究', t: 'Eager (2010) Summary and evaluation of Carl Rogers\' necessary and sufficient conditions of therapeutic personality change. The Person-Centered Journal, 17(1-2)', u: 'https://adpca.org/wp-content/uploads/2020/12/17_13.pdf', free: true, v: '本文確認',
    read: '原論文の6条件を引用つきで整理(①心理的接触 ②クライアントの不一致 ③セラピストの一致 ④無条件の肯定的関心 ⑤共感的理解 ⑥それが最低限伝わっていること)。「必要十分とまでは確かめられていない」という批判も紹介。原論文そのものではない' },
  elliott: { k: '研究', t: 'Elliott, Bohart, Watson & Murphy (2018) Therapist empathy and client outcome: An updated meta-analysis. Psychotherapy, 55, 399–410', u: 'https://strathprints.strath.ac.uk/66200/1/Elliott_etal_Psychotherapy_2018_Therapist_empathy_and_client_outcome_an_updated.pdf', free: true, v: '本文確認',
    read: '全文無料(著者版)。共感と治療結果の関連 r=.28(82サンプル・6,138人)。クライアント・観察者・セラピストの評定はどれも結果を予測したが、「相手の気持ちを当てる正確さ」は予測しなかった。提言:共感が伝わっているかを相手に確かめる、わかったつもりにならない、相手に合わせて表し方を変える' },
  norcross: { k: '専門書', t: 'Norcross & Lambert 編『Psychotherapy Relationships That Work』(3rd ed.) Oxford University Press, 2019', read: '共感・肯定的関心・同盟・亀裂の修復などのメタ分析', v: '未確認' },
  hill: { k: '専門書', t: 'Hill, C. E.『Helping Skills: Facilitating Exploration, Insight, and Action』(5th ed.) APA, 2020', read: '探索→洞察→行動の3段階と、各段階の技法', v: '未確認' },
  ivey: { k: '専門書', t: 'アイビイ『マイクロカウンセリング』福原眞知子ほか訳, 川島書店, 1985', read: '技法の階層表(かかわり行動→基本的傾聴→積極技法)', v: '未確認' },
  kokubu: { k: '専門書', t: '國分康孝『カウンセリングの技法』誠信書房, 1979', v: '未確認' },
  sfbt: { k: '研究', t: '栗田智未「大学生の進路相談場面における解決志向的質問技法の有効性の検討」広島大学 学位論文', u: 'https://ir.lib.hiroshima-u.ac.jp/26477/files/16842', free: true, v: '本文確認',
    read: '日本語で読める。解決志向は「原因の分析」より「解決した状態」に焦点を当てる。ミラクル・クエスチョン、例外探し、スケーリング・クエスチョン、コーピング・クエスチョンの説明と、カスタマー/コンプレイナント/ビジターの関係の見分け' },
  padesky: { k: '研究', t: 'Padesky (2020) Collaborative case conceptualization: Client knows best. Cognitive and Behavioral Practice', u: 'https://www.padesky.com/wp-content/uploads/2021/02/CollabCaseConcept-Client-Knows-Best-Padesky-fig1-2.pdf', free: true, v: '本文確認',
    read: '全文無料。見立ての3段階(記述→横断→縦断)のうち、今の変化に役立つ前の2つを中心に。5つの要素(生活の状況・考え・行動・体の反応・気分)のモデルと、きっかけと「続かせている反応」(一時的に楽になるが長期的には害になる対処)を見つけるモデル。本人の言葉でつくり、強みも入れ、どこから変えるかを一緒に決め、新しい情報で直していく(協働的経験主義)。効果の実証研究はまだ必要、と本人も書いている' },
  dejong: { k: '専門書', t: 'ディヤング＆バーグ『解決のための面接技法 第4版』金剛出版, 2016', read: '解決志向の質問(例外・スケーリング・ミラクルクエスチョン)', v: '所在確認' },
  shimoyama: { k: '専門書', t: '下山晴彦『臨床心理アセスメント入門』金剛出版, 2008', read: '初回面接での情報収集と見立ての組み立て', v: '未確認' },
  kazantzis: { k: '研究', t: 'Kazantzis et al. (2016) Quantity and quality of homework compliance: A meta-analysis of relations with outcome in cognitive behavior therapy. Behavior Therapy, 47(5)', u: 'https://openresearch-repository.anu.edu.au/items/7c8a2dc0-0366-4437-a722-1a074e44ef2a', v: '所在確認',
    read: '要旨で確認。ホームワークに取り組んだ量(g=0.79)も質(g=0.78)も、治療後の結果と関連。ただし質の推定は3研究だけで幅が広い' },
  // ── 危機対応 ──
  deJong: { k: '研究', t: 'de Jong et al. (2021) Using progress feedback to improve outcomes and reduce drop-out, treatment duration, and deterioration: A multilevel meta-analysis. Clinical Psychology Review, 85, 102002', u: 'https://scholarlypublications.universiteitleiden.nl/access/item%3A3250566/view', free: true, v: '本文確認',
    read: '全文無料(著者版)。58研究・約2万2千人。経過を測って面接に返す(プログレス・フィードバック)と、症状の改善に小さな効果(d=0.15)、中断がやや減る(24.5%→20.9%)。悪化の割合や面接回数には有意な差なし。うまく進んでいない人には、対応のヒントを示す道具が効きやすい(d=0.36)。測るだけでなく、結果を実際に使うことが前提' },
  lambertRom: { k: '研究', t: 'Lambert, Whipple & Kleinstäuber (2018) Collecting and delivering progress feedback: A meta-analysis of routine outcome monitoring. Psychotherapy, 55(4)', u: 'https://digitalcommons.usu.edu/psych_facpub/1871', v: '所在確認',
    read: '要旨で確認。24研究。経過の測定とフィードバックで、うまく進んでいない(悪い結果が予測される)人の改善率がほぼ倍になり、悪化も減った。de Jong(2021)より効果を大きく見積もっている点に注意' },
  kanazawaTerm: { k: '研究', t: '金沢吉展「心理療法の終結に関する研究:文献レビュー」明治学院大学心理学部付属研究所年報, 12, 53–65 (2019)', u: 'https://meigaku.repo.nii.ac.jp/record/3151/files/annual_psycho_12_53-65.pdf', free: true, v: '本文確認',
    read: '日本語で無料。効果的な終結の3段階(①振り返り:目標の達成度や満足・不満 ②今後の検討:見通し・将来の問題への対処・必要時の相談先 ③お別れ:関係や終結への気持ちの共有)。終結を喪失だけでなく成長の機会とみる見方。回数・目標・終わる理由の認識はセラピストとクライアントでずれやすい。初回から目標・期間・終結の見通しを話し、経過を継続的に確かめてフィードバックすることがスムーズな終結につながる。日本では終結の実証研究がきわめて少ない' },
  takahashi: { k: '専門書', t: '高橋祥友『自殺の危険 臨床的評価と危機介入 第4版』金剛出版, 2022', read: '危険因子の全体像と、面接での確認の仕方', v: '所在確認' },
  kokoroTalk: { k: '公的資料', t: 'こころの耳(厚生労働省)「自殺の予兆への介入」林剛司', u: 'https://kokoro.mhlw.go.jp/mental-health-pro-topics/mh-pro-topics003', free: true, v: '本文確認',
    read: '自殺の前に出やすい警告サインと、TALKの原則(Tell 心配していると言葉で伝える/Ask 死にたい気持ちを率直に尋ねる/Listen 聴く/Keep safe 安全を確保する)。危険因子としてうつ病・アルコール' },
  gkMhlw: { k: '公的資料', t: 'いのち支える自殺対策推進センター(JSCP)「JSCP ゲートキーパー研修について」(厚生労働省の会議資料 参考資料4)', u: 'https://www.mhlw.go.jp/content/12200000/001144396.pdf', free: true, v: '本文確認',
    read: '気づき・傾聴・つなぎ・見守りの4つの役割と、話の聴き方のコツ。「誰にも言わないで」と言われても、命を優先してつなぐ' },
  gkText3: { k: '公的資料', t: '厚生労働省「ゲートキーパー養成研修用テキスト」第3版(平成25年8月)4章「自殺の危険因子と防御因子」', u: 'https://www.mhlw.go.jp/content/text3_04_8-9.pdf', free: true, v: '本文確認',
    read: '危険因子11項目(過去の自殺企図・自傷歴、喪失体験、苦痛な体験、職業・経済・生活の問題、精神疾患・身体疾患、ソーシャルサポートの欠如、手段への容易なアクセス、自殺念慮・絶望感・衝動性・孤立感、飲酒や薬物で紛らわす、危険行動、家族歴など)と、防御因子9項目(心身の健康、安定した社会生活、支援や支援者の存在、使える社会制度、医療・福祉の活用、信頼できる人に相談する対処、周囲の理解など)' },
  gkRolePlay: { k: '公的資料', t: '厚生労働省「ゲートキーパー養成研修用テキスト」第3版 8章「ロールプレイシナリオ」(相談窓口編・医療機関編など)', u: 'https://www.mhlw.go.jp/content/text3_08_24-139.pdf', free: true, v: '所在確認',
    read: '目次で所在を確認(本文は未確認)。場面別の良い対応・悪い対応のシナリオ。試験官ロールプレイの題材にも使える' },
  gatekeeper: { k: '公的資料', t: '厚生労働省 自殺対策推進室「ゲートキーパー養成研修 講師用テキスト」(2025年3月)', u: 'https://www.mhlw.go.jp/mamorouyokokoro/assets/pdf/fy2024_gatekeeper_instructor_textbook.pdf', free: true, read: '気づき・傾聴・つなぎ・見守りの基本', v: '所在確認' },
  stanley: { k: '研究', t: 'Stanley & Brown (2012) Safety Planning Intervention: A brief intervention to mitigate suicide risk. Cognitive and Behavioral Practice, 19(2)', read: '安全計画の6つの段階(警告サイン、自分でできる対処、人や場所、助けを求める人、専門機関、手段の制限)', v: '未確認' },
  rudd: { k: '研究', t: 'Rudd, Mandrusiak & Joiner (2006) The case against no-suicide contracts: The commitment to treatment statement as a practice alternative. Journal of Clinical Psychology, 62(2)', u: 'https://digitalcommons.memphis.edu/facpubs/8687', read: '「自殺しない約束」には効果の裏づけが乏しいこと', v: '所在確認' },
  // ── 自己理解・逆転移 ──
  hayesCt: { k: '研究', t: 'Hayes, Gelso, Goldberg & Kivlighan (2018) Countertransference management and effective psychotherapy: Meta-analytic findings. Psychotherapy, 55(4)', u: 'https://pure.psu.edu/en/publications/countertransference-management-and-effective-psychotherapy-meta-a/', v: '所在確認',
    read: '要旨で確認。逆転移的な反応が多いほど結果はやや悪い(r=.16の逆の関連・14研究)。逆転移を扱う力は反応を減らし(r=-.27)、良い結果と関連する(r=.39・9研究)' },
  ctIto: { k: '研究', t: '伊藤研一 (2014)「「逆転移」感得と吟味の練習法としてのインタラクティブ・フォーカシング—初心心理臨床家のために」学習院大学『人文』13, 117–126', u: 'https://core.ac.uk/download/292914915.pdf', free: true, v: '本文確認',
    read: '日本語で無料。逆転移が「治療の妨げ」から「患者理解の鍵」へと見直された流れ(土居健郎、ラッカーの融和型・補足型同一視、松木邦裕など)。治療者自身の不安によるものは抑え、患者の葛藤の反映は理解の手がかりにする、という使い分け。逆転移を相手に確かめながら吟味する練習法の提案' },
  gelso: { k: '専門書', t: 'Gelso & Hayes『Countertransference and the Therapist\'s Inner Experience』Erlbaum, 2007', read: '古典的・全体的・統合的な逆転移の定義の違い', v: '未確認' },
  heimann: { k: '研究', t: 'Heimann (1950) On counter-transference. International Journal of Psycho-Analysis, 31', read: '逆転移を「理解の道具」として捉え直した論文', v: '未確認' },
  winnicott: { k: '研究', t: 'Winnicott (1949) Hate in the counter-transference. International Journal of Psycho-Analysis, 30', v: '未確認' },
  hook: { k: '研究', t: 'Hook et al. (2013) Cultural humility: Measuring openness to culturally diverse clients. Journal of Counseling Psychology, 60(3)', u: 'https://doi.org/10.1037/a0032595', read: '自分の価値観を前提にしない姿勢(文化的謙虚さ)', v: '所在確認' },
  // ── 技法(CBT・ACT・MI・TIC・BPS) ──
  beck: { k: '専門書', t: 'Beck, J. S.『Cognitive Behavior Therapy: Basics and Beyond』(3rd ed.) Guilford, 2020', v: '未確認' },
  mhlwCbt: { k: '公的資料', t: '厚生労働省 研究班「うつ病の認知療法・認知行動療法 治療者用マニュアル」(慶應義塾大学認知行動療法研究会 編)', u: 'https://www.mhlw.go.jp/bunya/shougaihoken/kokoro/dl/01.pdf', free: true, v: '本文確認',
    read: '日本語で無料。16〜20回・6段階の構成。1回の流れ(チェックイン→ホームワークの振り返り→アジェンダ設定→話し合い→ホームワークの設定→まとめとフィードバック)。3つのコラム(状況・気分・自動思考)と7つのコラム(根拠・反証・適応的思考を足す)。協働的経験主義、ソクラテス的質問(答えを与えず一緒に考える)。自殺・自傷や治療者への陰性感情は、進み具合に関係なく優先して扱う' },
  hayesAct: { k: '専門書', t: 'Hayes, Strosahl & Wilson『Acceptance and Commitment Therapy』(2nd ed.) Guilford, 2012', read: '脱フュージョン・価値・アクセプタンスなどの6つのプロセス', v: '未確認' },
  harrisAct: { k: '専門書', t: 'ラス・ハリス『ACTをはじめる』星和書店, 2012', v: '未確認' },
  actJ: { k: '研究', t: '前原未佳・下満由貴・小山憲一郎 (2020)「心理的非柔軟性に動機づけられたストレスコーピングは主観的幸福感を高めるのか？」福岡県立大学人間社会学部紀要, 29(1)', u: 'https://fukuoka-pu.repo.nii.ac.jp/record/508/files/2901_maehara.pdf', free: true, v: '本文確認',
    read: '日本語で読める。心理的柔軟性の定義と6つのコアプロセス(アクセプタンス、脱フュージョン、「今この瞬間」との接触、文脈としての自己、価値、コミットされた行為)と、その裏返しの心理的非柔軟性(体験の回避、認知的フュージョンなど)の整理' },
  mi: { k: '専門書', t: 'ミラー＆ロルニック『動機づけ面接〈第3版〉上・下』星和書店, 2019', read: '両価性、チェンジトーク、引き出す・聞き返す', v: '未確認' },
  miJ: { k: '研究', t: '篠塚友美ほか「2型糖尿病患者への自己管理の継続を促す看護職による動機づけ面接の特徴」', u: 'https://www.jiu.ac.jp/files/user/education/books/pdf/841-58.pdf', free: true, v: '本文確認',
    read: '看護の研究だが、MIの基本を日本語で確かめられる。両価性(変わりたい・変わりたくないが同時にある)、チェンジトークを捉えて聞き返し膨らませる、MIスピリット(受容・協働・思いやり・喚起)' },
  samhsa: { k: '公的資料', t: 'SAMHSA (2014)「SAMHSA\'s Concept of Trauma and Guidance for a Trauma-Informed Approach」', u: 'https://ncsacw.acf.hhs.gov/userfiles/files/SAMHSA_Trauma.pdf', free: true, read: '6つの原則(安全、信頼性と透明性、ピアサポート、協働、エンパワメントと選択、文化・歴史・ジェンダー)', v: '所在確認' },
  tic: { k: '公的資料', t: '亀岡智美「トラウマインフォームドケアの実践普及に向けての指針改定のための一考察」厚生労働科学研究 分担研究報告書(兵庫県こころのケアセンター)', u: 'https://mhlw-grants.niph.go.jp/system/files/report_pdf/202018047A-buntan1.pdf', free: true, v: '本文確認',
    read: '日本語で無料。トラウマの影響を理解し、気づき、対応し、再トラウマ化を防ぐという考え方(原文は「4つのR」という語は使わず、Realize・Recognize・Respond・Resist re-traumatization の4つを挙げている)。回復する力に目を向けること。トラウマの話題を避け続けることも害になりうる' },
  tvic: { k: '公的資料', t: 'Wathen & Varcoe (2019)「トラウマ＆バイオレンス・インフォームドケア(TVIC):ジェンダーに基づく暴力のサバイバーの安全を優先する」日本語版(TVIC翻訳チーム・国立精神・神経医療研究センター掲載)', u: 'https://www.ncnp.go.jp/nimh/yakubutsu/TVIC/pdf/TVIC_intro.pdf', free: true, v: '本文確認',
    read: 'TICを広げ、今も続いている暴力や社会構造的な不公平にも目を向ける考え方。支援に、トラウマや暴力の経験を話してもらうことは必要ない。誰に対しても安全な関わりを基本にする(普遍的予防策)。開示されたら、信じる・肯定する・安全への配慮を伝える。選択肢を一緒に考える。支援や制度そのものが人を傷つけうることを意識する' },
  harrisFallot: { k: '専門書', t: 'Harris & Fallot 編 (2001) Using Trauma Theory to Design Service Systems. New Directions for Mental Health Services, 89', read: '安全・信頼・選択・協働・エンパワメントの5つの価値', v: '未確認' },
  engel: { k: '研究', t: 'Engel (1977) The need for a new medical model: A challenge for biomedicine. Science, 196', u: 'https://pubmed.ncbi.nlm.nih.gov/847460/', read: '生物心理社会モデルの原典', v: '所在確認' },
  // ── 同盟・亀裂 ──
  bordin: { k: '研究', t: 'Bordin (1979) The generalizability of the psychoanalytic concept of the working alliance. Psychotherapy: Theory, Research & Practice, 16(3), 252–260', u: 'https://clinica.ispa.pt/sites/default/files/63._the_generalizability_of_the_psychoanalytic_concept_of_the_working_alliance.pdf', free: true, v: '本文確認',
    read: '全文無料。同盟の3要素:目標(何を変えるかの合意)・課題(何をするかの合意。課題と本人の困りごとのつながりを示すほど働く)・絆(信頼と愛着)。亀裂と修復はこの論文には出てこない(後の Safran らの研究)' },
  fluckiger: { k: '研究', t: 'Flückiger et al. (2018) The alliance in adult psychotherapy: A meta-analytic synthesis. Psychotherapy, 55(4)', u: 'https://www.societyforpsychotherapy.org/wp-content/uploads/2018/10/Fluckiger-et-al-2018.pdf', free: true, v: '本文確認',
    read: '全文無料。295研究・3万人超で、同盟と治療結果の関連 r=.278。提言:クライアントの視点で同盟を定期的に確かめる、亀裂には早めに向き合う、オンラインでも同じように同盟に気を配る' },
  safran: { k: '専門書', t: 'Safran & Muran『Negotiating the Therapeutic Alliance: A Relational Treatment Guide』Guilford, 2000', read: '引きこもり型・対立型の亀裂と、メタコミュニケーションによる修復', v: '未確認' },
  safran2011: { k: '研究', t: 'Safran, Muran & Eubanks-Carter (2011) Repairing alliance ruptures. Psychotherapy, 48(1), 80–87', u: 'https://clinica.ispa.pt/sites/default/files/70._ruptures_meta_analysis.pdf', free: true, v: '本文確認',
    read: '全文無料。修復と治療結果の関連 r=.24(3研究・148人)。修復の訓練の前後比較 r=.65、群間比較 r=.15。亀裂がなかった事例との比較はしていない。提言:防衛せずに応じる、自分の関与を認める、亀裂を口にしてくれたことを認める' },
  eubanks: { k: '研究', t: 'Eubanks, Muran & Safran (2018) Alliance rupture repair: A meta-analysis. Psychotherapy, 55(4)', u: 'https://doi.org/10.1037/pst0000185', read: '2011年版を更新したメタ分析。修復と治療結果の関連(中程度)。「亀裂がない関係より良い」とまでは示していない', v: '所在確認' },
  // ── スーパービジョン・成長 ──
  supGl: { k: '公的資料', t: 'APA「Guidelines for Clinical Supervision in Health Service Psychology」(2014)の解説(Society for the Advancement of Psychotherapy)', u: 'https://www.societyforpsychotherapy.org/guidelines-clinical-supervision-health-service-psychology/', free: true, v: '本文確認',
    read: '7つの領域:SVの能力、多様性、SV関係(役割と期待を明確にする、関係のひずみの修復は当然の仕事、書面の契約)、専門職らしさ(手本で学ばれる)、評価とフィードバック(具体的な行動に結びつけ、時機を逃さない。録音や陪席で確かめる)、能力の問題への早めの対処、倫理・法' },
  motonaga: { k: '研究', t: '元永拓郎 (2024)「日本における心理専門職養成に求められるコンピテンシー概念」公認心理師：実践と研究, 3(1)', u: 'https://www.jstage.jst.go.jp/article/jacpp/3/1/3_a03.a401/_article/-char/ja', free: true, v: '所在確認',
    read: '要旨で確認。米国の心理職のコンピテンシー(基盤的・機能的)が日本の公認心理師養成にどこまで当てはまるかを検討。機能的コンピテンシーは心の健康教育を加えればおおむね当てはまり、基盤的コンピテンシーは日米で共通に整理でき、省察的実践で深めることを重視。成長の書の項目を点検する物差しになる' },
  stoltenberg: { k: '専門書', t: 'Stoltenberg & McNeill『IDM Supervision』(3rd ed.) Routledge, 2010', read: '統合発達モデルのレベル1〜3iと、レベルごとの関わり方', v: '未確認' },
  ronnestad: { k: '研究', t: 'Rønnestad & Skovholt (2003) The journey of the counselor and therapist. Journal of Career Development, 30(1), 5–', u: 'https://sv.uio.no/psi/personer/vit/emeritus/helgero/JourneyarticleJCD.pdf', free: true, v: '本文確認',
    read: '全文無料。素人の援助者→初心の学生→上級の学生→新人→経験者→熟練者の6段階と、14のテーマ(職業上の自己と個人としての自己が統合されていく、絶え間ない内省が成長を支える、クライアントが主な教師になる、など)' },
  bernard: { k: '専門書', t: 'Bernard & Goodyear『Fundamentals of Clinical Supervision』(6th ed.) Pearson, 2019', read: 'スーパービジョンとコンサルテーションの違い', v: '未確認' },
  falender: { k: '専門書', t: 'Falender & Shafranske『Clinical Supervision: A Competency-Based Approach』APA, 2004', read: '行動で定義する能力基準(コンピテンシー)', v: '未確認' },
  rousmaniere: { k: '専門書', t: 'Rousmaniere『Deliberate Practice for Psychotherapists』Routledge, 2017', read: '録音・振り返り・フィードバックをくり返す「意図的な練習」', v: '未確認' },
  edmondson: { k: '研究', t: 'Edmondson (1999) Psychological safety and learning behavior in work teams. Administrative Science Quarterly, 44(2)', u: 'https://doi.org/10.2307/2666999', v: '所在確認' },
  polanyi: { k: '専門書', t: 'ポランニー『暗黙知の次元』ちくま学芸文庫, 2003', v: '未確認' },
  figley: { k: '専門書', t: 'Figley 編『Compassion Fatigue』Brunner/Mazel, 1995', v: '未確認' },
  proqol: { k: '公的資料', t: 'ProQOL(Professional Quality of Life)公式サイト', u: 'https://proqol.org/', free: true, read: '共感満足・バーンアウト・二次的外傷性ストレスのセルフチェック', v: '所在確認' },
  proqolJ: { k: '研究', t: '福森崇貴・後藤豊実・佐藤寛 (2018)「看護師を対象としたProQOL日本語版(ProQOL-JN)の作成」心理学研究', u: 'https://www.jstage.jst.go.jp/article/jjpsy/advpub/0/advpub_89.17202/_article/-char/ja', free: true, v: '所在確認',
    read: '要旨で確認。二次的外傷性ストレス(共感疲労)・共感満足・バーンアウトの3つで測る。看護師618人で信頼性・妥当性を確認(心理職向けの日本語版ではない点に注意)' },
  fujioka: { k: '研究', t: '藤岡孝志「共感疲労の観点に基づく援助者支援プログラムの構築に関する研究」日本社会事業大学研究紀要, 57, 201–237 (2011)', u: 'https://jcsw.repo.nii.ac.jp/record/35/files/57_201-237_fujioka.pdf', free: true, v: '本文確認',
    read: '日本語で無料。児童養護施設の職員212人の調査。共感的に関わる専門性を発揮するほど二次的外傷性ストレスにさらされやすいというジレンマ。共感疲労は情緒的消耗感・脱人格化と関連し、共感満足が高いほどバーンアウトのリスクが低い。仕事のつらさを受け止めてもらえる実感、仕事を離れる時間、ユーモアの共有が支えになりうる。個人任せにせず、チームと組織で支える仕組みが要る' },
  skovholt: { k: '専門書', t: 'Skovholt & Trotter-Mathison『The Resilient Practitioner』(3rd ed.) Routledge, 2016', v: '未確認' },
  apaEbpSt: { k: '公的資料', t: 'APA「Policy Statement on Evidence-Based Practice in Psychology」(2005年8月承認)', u: 'https://www.apa.org/practice/guidelines/evidence-based-statement', free: true, v: '本文確認',
    read: '定義:EBPPは「利用できる最良の研究」と「臨床的専門性」を、「クライアントの特性・文化・選好」の文脈で統合すること。臨床的専門性には、見立て・ケースフォーミュレーション・治療計画・経過の確認、対人スキル、学び続けること、自分の偏りへの気づきが含まれる' },
  apaEbp: { k: '研究', t: 'APA Presidential Task Force on Evidence-Based Practice (2006) Evidence-based practice in psychology. American Psychologist, 61(4)', u: 'https://pubmed.ncbi.nlm.nih.gov/16719673/', read: '研究・臨床的専門性・クライアントの特性と選好の統合', v: '所在確認' },
} satisfies Record<string, Ref>

// ── 資料ごとの読む場所・目安時間・引用の注意(2026-11-05 に資料の構成を確認して記入) ──
// ページは資料に印刷されたページ。英語の論文は、辞書を引きながら読む前提の目安。
const META: Partial<Record<keyof typeof R, Pick<Ref, 'where' | 'min' | 'cite'>>> = {
  cpLaw: { where: '第2条・第40条・第41条・第42条', min: 5 },
  doctorLaw: { where: '第17条(1文)', min: 1 },
  ikoui: { where: '医師法第17条と「医業」「医行為」の解釈を引用した部分', min: 5 },
  childAbuse: { where: '第6条', min: 2 },
  elderAbuse: { where: '第7条・第21条', min: 5 },
  disabAbuse: { where: '第7条・第16条・第22条', min: 5 },
  dvLaw: { where: '第6条', min: 2 },
  piLaw: { where: '第27条第1項', min: 3 },
  ppcFaq: { where: 'Q7-19(1問)', min: 3 },
  ppcMed: { where: 'Ⅱ-3 要配慮個人情報(p.9)、Ⅳ-7 安全管理措置・委託先の監督(p.36〜)', min: 15, cite: '90ページ以上ある資料。必要な節だけ読む' },
  ppcAi: { where: '個人情報取扱事業者への注意点(2項目)', min: 5 },
  jacppCode: { where: '全12条(1条が2〜3行)', min: 10 },
  jacppGd: { where: '第5条(2) 秘密保持の限界(p.13〜14)', min: 8, cite: '全25ページ。条ごとに解説があるので、課題に合う条だけ読む' },
  jsccp: { where: '第2条〜第5条', min: 10 },
  apaTele: { where: '目次ページ(各ガイドラインへのリンク)', min: 3 },
  apaTele2: { where: 'ガイドライン2のページ全体', min: 10 },
  apaTele3: { where: 'ガイドライン3のページ全体', min: 10 },
  snsGl: { where: '3章Ⅲ「文字による相談の注意点」(p.11〜14)', min: 15, cite: '全29ページ。節のページは本文の改ページからの推定で、前後することがある' },
  rogersEager: { where: '冒頭ページの6条件の一覧〜Condition 6(p.112)', min: 20 },
  elliott: { where: 'Overall Empathy-Outcome Association(p.8)と Therapeutic Practices(p.11〜12)', min: 15, cite: '著者版(ポストプリント)のページ。正式版(Psychotherapy 55, 399–410)とページが違う' },
  sfbt: { where: '第1章第2節(pp.8〜14)。質問例は Table 1(p.11)、3タイプは Table 2(p.14)', min: 15, cite: '提出年は未確認' },
  padesky: { where: '2つのモデルの紹介(pp.3〜5)と結論(pp.30〜31)', min: 20, cite: '原稿版のページ。2020年7月オンライン公開。巻号・ページは未確認' },
  deJong: { where: '要旨(Abstract)と考察(Discussion)の冒頭', min: 10, cite: '全19ページ。節のページは未確認' },
  kokoroTalk: { where: 'ページ全体(短い解説)', min: 5 },
  gkMhlw: { where: 'p.3(4つの役割・ゲートキーパーとしての心得)', min: 5, cite: '発行年の記載なし' },
  gkText3: { where: '4章(p.8〜9)', min: 5 },
  gkRolePlay: { where: '8章から「相談窓口編」か「医療機関編」の1場面', min: 15, cite: '画像のPDFのようで、文字の検索・コピーができない可能性がある' },
  hayesCt: { where: '要旨', min: 3 },
  apaEthics: { where: '3.05、4.01〜4.05、10.01', min: 15 },
  ctIto: { where: 'Ⅱ-1「精神分析における『逆転移』の意味」(pp.118〜119)', min: 8 },
  mhlwCbt: { where: '1.4 セッションの流れ(p.4)', min: 3, cite: '全28ページ。正式な目次がないため、見出しのページは本文からの推定' },
  actJ: { where: 'p.4(6つのコアプロセス)', min: 5 },
  miJ: { where: 'p.18(定義・両価性)とp.26(MIスピリット)', min: 5, cite: '掲載誌名・巻号・発行年は本文に記載がなく未確認(城西国際大学のサイトに掲載)' },
  tic: { where: 'p.14', min: 5, cite: '年度の記載なし(2020年度以降と推定)' },
  tvic: { where: '「支援者の実務と教育への影響」と「TVICの原則」の節', min: 15, cite: 'ページ番号のない資料' },
  bordin: { where: '目標・課題・絆(pp.253〜254)', min: 10 },
  fluckiger: { where: 'Therapeutic Practices(p.17、11項目)', min: 5, cite: '早期公開版(ページ番号なし)。正式版は Psychotherapy 55(4)' },
  safran2011: { where: 'Results(pp.83〜84)と Therapeutic Practices(p.86)', min: 10 },
  supGl: { where: 'ページ全体(7つの領域)', min: 10 },
  ronnestad: { where: '14のテーマの見出しを拾い読み(pp.27〜38)', min: 15, cite: '全40ページ近い論文。まず見出しだけ読む' },
  kanazawaTerm: { where: '2.終結行動(pp.54〜55)と4.実践への示唆(pp.59〜60)', min: 10 },
  fujioka: { where: 'Ⅰ〜Ⅱ(pp.202〜204)とⅥ考察(pp.224〜228)', min: 20, cite: '全37ページ。調査結果の節(pp.206〜223)は飛ばしてよい' },
  apaEbpSt: { where: 'ページ冒頭の定義と、3つの要素の説明', min: 10 },
  proqolJ: { where: '要旨', min: 3 },
  presence: { where: '要旨', min: 3 },
  motonaga: { where: '要旨', min: 3 },
  lambertRom: { where: '要旨', min: 3 },
  kazantzis: { where: '要旨', min: 3 },
}
for (const [k, m] of Object.entries(META)) Object.assign((R as Record<string, Ref>)[k], m)

const ORIGINAL = '成長の書の独自の整理です。研究や原典で定められた基準ではないので、根拠資料は「考え方の土台」として読んでください。'
const PRACTICE = '実践知(経験からの工夫)で、研究による裏づけは限られます。一律の決まりとしてではなく、目安として使ってください。'

export const TASK_REFS: Record<string, TaskRefs> = {
  // ===== Lv.1 =====
  'lv1:バウンダリー（境界線）:0': { level: 'C', refs: [R.cpLaw, R.jacppGd, R.jsccp, R.apaEthics, R.kanazawa] },
  'lv1:バウンダリー（境界線）:1': { level: 'C', refs: [R.jacppCode, R.jsccp, R.kanazawa, R.cpLaw] },
  'lv1:バウンダリー（境界線）:2': { level: 'C', refs: [R.gutheil, R.kanazawa], see: [R.jacppGd, R.jsccp, R.apaTele], note: '「例外を一切作らない」は運用上の方針です。境界の「越え」がすべて有害なわけではなく、記録と相談のうえで判断する、というのが文献の立場です。' },
  'lv1:バウンダリー（境界線）:3': { level: 'A', refs: [R.jacppGd, R.jacppCode, R.jsccp, R.gutheil, R.apaEthics, R.kanazawa] },
  'lv1:バウンダリー（境界線）:4': { level: 'B', refs: [R.hayesCt, R.gelso], see: [R.ctIto] },
  'lv1:コンプライアンス（安全条項）:0': { level: 'A', refs: [R.ikoui, R.doctorLaw, R.cpLaw, R.cpDoctor], see: [R.jacppGd] },
  'lv1:コンプライアンス（安全条項）:1': { level: 'A', refs: [R.cpLaw, R.jacppGd, R.jsccp, R.childAbuse, R.disabAbuse, R.elderAbuse, R.dvLaw, R.ppcFaq, R.piLaw], note: '通告・通報の義務は、児童・障害者・高齢者・DVで、根拠法も「義務か努力義務か」も違います。法律ごとに分けて覚えてください。' },
  'lv1:コンプライアンス（安全条項）:2': { level: 'C', refs: [R.cpLaw], see: [R.gkMhlw, R.apaTele, R.gatekeeper] },
  'lv1:コンプライアンス（安全条項）:3': { level: 'A', refs: [R.ppcAi, R.ppcMed, R.jacppGd, R.jsccp, R.piLaw, R.ppcGuide, R.apaRecord] },
  'lv1:コンプライアンス（安全条項）:4': { level: 'C', refs: [R.cpLaw, R.jacppCode, R.jsccp, R.apaEthics], note: '「信用失墜行為の禁止」(公認心理師法第40条)と多重関係の考え方を、SNSに当てはめた整理です。' },
  'lv1:運用スキル:0': { level: 'D', refs: [], see: [R.apaTele3, R.tsccpNet, R.apaTele], note: PRACTICE + '使っているサービスの手順に慣れることが中心で、文献の根拠を必要とする課題ではありません。' },
  'lv1:運用スキル:1': { level: 'A', refs: [R.apaTele2, R.apaTele, R.tsccpNet], see: [R.presence] },
  'lv1:運用スキル:2': { level: 'C', refs: [R.apaTele3, R.apaTele2, R.apaTele, R.tsccpNet], note: PRACTICE },
  // ===== Lv.2 =====
  'lv2:マインド:0': { level: 'C', refs: [R.snsGl, R.hill], see: [R.rogersEager] },
  'lv2:マインド:1': { level: 'B', refs: [R.rogersEager, R.rogers, R.norcross], see: [R.elliott] },
  'lv2:マインド:2': { level: 'D', refs: [], see: [R.presence, R.apaTele2, R.apaTele, R.norcross], note: PRACTICE },
  'lv2:マインド:3': { level: 'B', refs: [R.hayesCt, R.gelso], see: [R.ctIto] },
  'lv2:マインド:4': { level: 'A', refs: [R.jacppGd, R.apaTele3, R.jsccp, R.apaEthics, R.kanazawa, R.apaTele] },
  'lv2:スキル:0': { level: 'D', refs: [], see: [R.mhlwCbt, R.hill, R.ivey], note: '「導入→主訴明確化→探索→要約→合意→クロージング」は成長の書の運用上の型で、この順序を直接定めた文献はありません。厚労省のCBTマニュアルの「1回の流れ」や Hill の3段階モデルは、考え方が近い参考資料です。' },
  'lv2:スキル:1': { level: 'C', refs: [R.shimoyama], see: [R.engel, R.hook, R.jacppCode] },
  'lv2:スキル:2': { level: 'B', refs: [R.elliott, R.rogersEager, R.rogers, R.norcross, R.ivey] },
  'lv2:スキル:3': { level: 'C', refs: [R.snsGl, R.ivey, R.hill, R.mi] },
  'lv2:スキル:4': { level: 'D', refs: [R.snsGl, R.snsHb, R.snsCb], note: PRACTICE },
  'lv2:知識:0': { level: 'C', refs: [R.hill, R.kanazawa], see: [R.snsGl, R.cpLaw] },
  'lv2:知識:1': { level: 'C', refs: [R.ivey, R.kokubu, R.hill], see: [R.elliott] },
  'lv2:知識:2': { level: 'C', refs: [R.sfbt, R.mhlwCbt, R.dejong, R.beck] },
  'lv2:知識:3': { level: 'A', refs: [R.jacppGd, R.jsccp, R.ppcMed, R.apaRecord, R.ppcGuide] },
  'lv2:知識:4': { level: 'A', refs: [R.jacppGd, R.jsccp, R.apaEthics, R.kanazawa] },
  'lv2:セッション終了スキル:0': { level: 'B', refs: [R.mhlwCbt, R.kazantzis, R.beck] },
  // ===== Lv.3 =====
  'lv3:マインド（自己安定）:0': { level: 'A', refs: [R.kokoroTalk, R.gkMhlw, R.snsGl, R.gatekeeper, R.takahashi], see: [R.gkRolePlay] },
  'lv3:マインド（自己安定）:1': { level: 'B', refs: [R.hayesCt, R.rousmaniere], see: [R.ctIto] },
  'lv3:マインド（自己安定）:2': { level: 'C', refs: [R.kokoroTalk, R.takahashi], see: [R.tvic, R.tic, R.hill] },
  'lv3:マインド（自己安定）:3': { level: 'C', refs: [R.ronnestad, R.rousmaniere], see: [R.supGl] },
  'lv3:マインド（自己安定）:4': { level: 'C', refs: [R.supGl, R.bernard], see: [R.cpLaw] },
  'lv3:スキル（型の維持＋技法の初期実装）:0': { level: 'B', refs: [R.hook, R.apaEthics], see: [R.jacppCode, R.tvic, R.supGl] },
  'lv3:スキル（型の維持＋技法の初期実装）:1': { level: 'C', refs: [R.mhlwCbt, R.beck], see: [R.padesky], note: '思考・感情・行動・身体の4つに分ける整理は、CBTでよく使われる方法の一つです(状況・環境を加える整理もあります)。唯一の標準モデルではありません。厚労省のマニュアルは「状況・気分・自動思考」のコラムから入ります。' },
  'lv3:スキル（型の維持＋技法の初期実装）:2': { level: 'C', refs: [R.actJ, R.hayesAct, R.harrisAct] },
  'lv3:スキル（型の維持＋技法の初期実装）:3': { level: 'C', refs: [R.mi], see: [R.miJ] },
  'lv3:スキル（型の維持＋技法の初期実装）:4': { level: 'C', refs: [R.snsGl, R.suler, R.snsHb], see: [R.safran2011, R.safran] },
  'lv3:スキル（型の維持＋技法の初期実装）:5': { level: 'A', refs: [R.cpLaw, R.cpDoctor, R.jacppGd, R.gkMhlw, R.snsGl] },
  'lv3:スキル（型の維持＋技法の初期実装）:6': { level: 'A', refs: [R.childAbuse, R.disabAbuse, R.elderAbuse, R.dvLaw], note: 'DVは通報の「努力義務」で、児童虐待・障害者虐待の「義務」とは違います。高齢者虐待は、養護者によるものは生命・身体に重大な危険がある場合だけが義務、施設の職員が見つけた施設内の虐待は重大さを問わず義務です。' },
  'lv3:スキル（型の維持＋技法の初期実装）:7': { level: 'C', refs: [R.padesky, R.mhlwCbt, R.shimoyama], see: [R.engel, R.hook, R.tvic], note: '5つの欄(きっかけ・続かせているもの・強み・環境・望む変化)は成長の書の整理です。Padesky の「記述→横断」の見立てに考え方が近いものです。見立てを本人と共有すると結果が良くなる、という点は、Padesky 自身も「実証研究はまだ必要」としています。' },
  'lv3:スキル（型の維持＋技法の初期実装）:8': { level: 'C', refs: [R.kanazawaTerm, R.deJong, R.mhlwCbt], see: [R.lambertRom, R.sfbt], note: '初回の状態と目標を記録しておくことは、経過を確かめる方法(プログレス・フィードバック)の前提です。その方法自体の効果は小さいながら一貫しています(de Jong ほか 2021、d=0.15)。' },
  'lv3:知識:0': { level: 'C', refs: [R.apaEbpSt, R.apaEbp, R.mhlwCbt, R.actJ, R.beck, R.hayesAct, R.mi] },
  'lv3:知識:1': { level: 'A', refs: [R.tic, R.tvic, R.samhsa, R.harrisFallot], note: '課題の5項目は Harris & Fallot(2001)の5つの価値にあたります。SAMHSA(2014)はこれに、ピアサポートと、文化・歴史・ジェンダーへの配慮を加えた6原則で整理しています。' },
  'lv3:知識:2': { level: 'C', refs: [R.engel, R.shimoyama], see: [R.tvic, R.hook] },
  'lv3:知識:3': { level: 'A', refs: [R.snsGl, R.apaTele, R.snsHb], see: [R.tsccpNet, R.stanley] },
  // ===== Lv.4 =====
  'lv4:マインド（見立て視点）:0': { level: 'B', refs: [R.safran2011, R.safran, R.eubanks] },
  'lv4:マインド（見立て視点）:1': { level: 'B', refs: [R.safran2011, R.safran, R.hayesCt] },
  'lv4:マインド（見立て視点）:2': { level: 'B', refs: [R.safran2011, R.eubanks, R.safran], note: '修復と良い治療結果には関連があります(2011年のメタ分析で r=.24、3研究)。ただし、亀裂がなかった事例との比較はしておらず、「亀裂がなかった関係より深くなる」とまでは示されていません。' },
  'lv4:マインド（見立て視点）:3': { level: 'D', refs: [], see: [R.snsGl, R.snsHb, R.apaTele], note: PRACTICE },
  'lv4:マインド（見立て視点）:4': { level: 'C', refs: [R.supGl, R.bernard, R.falender] },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:0': { level: 'C', refs: [R.gkText3, R.kokoroTalk, R.snsGl, R.gkMhlw, R.takahashi, R.gatekeeper, R.stanley], see: [R.gkRolePlay], note: '計画・手段・時期・支えの4つは確認の入口です。過去の自殺企図、精神疾患、絶望感、アルコール・薬物、喪失体験なども含めて見立て、判断は一人でせずSV・医療と共有します。' },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:1': { level: 'D', refs: [R.safran2011, R.safran, R.eubanks], note: ORIGINAL + 'Safran & Muran の分類では「引きこもり型」にあたります。' },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:2': { level: 'D', refs: [R.safran2011, R.safran], note: ORIGINAL + 'Safran & Muran の分類では「引きこもり型」にあたります。' },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:3': { level: 'D', refs: [R.safran2011, R.safran, R.eubanks], note: ORIGINAL + 'Safran & Muran の分類では「対立型」にあたります。原典がすすめるのは、防衛せずに自分の関与を認めて相手の体験を探ることで、全面的に非を認めることではありません。' },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:4': { level: 'D', refs: [R.safran, R.snsHb], see: [R.snsGl], note: ORIGINAL + '返信がないことには、内省・疲れ・通信環境・生活の事情など、亀裂以外の理由もあります。' },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:5': { level: 'D', refs: [R.safran, R.mi], see: [R.safran2011, R.miJ], note: ORIGINAL },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:6': { level: 'D', refs: [R.safran], see: [R.safran2011], note: ORIGINAL },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:7': { level: 'D', refs: [R.safran], see: [R.kokoroTalk], note: ORIGINAL + '「もう終わりにしたい」には希死念慮が含まれることもあるので、まずリスクの確認を優先します。' },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:8': { level: 'D', refs: [], see: [R.snsGl, R.snsHb, R.apaTele], note: PRACTICE + '一律の時間ではなく、契約で示した目安・緊急度・その人の状態で判断します。' },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:9': { level: 'C', refs: [R.padesky, R.bordin, R.mhlwCbt], see: [R.fluckiger], note: '見立てを共有すること自体の効果の研究はまだ限られます(Padesky 2020)。目標と課題について合意をつくる、という点は同盟の考え方(Bordin 1979)と重なります。' },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:10': { level: 'B', refs: [R.deJong, R.lambertRom, R.fluckiger], see: [R.sfbt], note: 'de Jong ほか(2021)のメタ分析では、効果は全体で小さく(d=0.15)、悪化の割合や面接回数には有意な差がありませんでした。「測れば必ず良くなる」ではなく、「本人と一緒に確かめて方針を選ぶ習慣」として使ってください。' },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:11': { level: 'C', refs: [R.kanazawaTerm, R.mhlwCbt], note: '日本では終結についての実証研究がきわめて少ないとされています(金沢のレビュー)。終結の進め方は、海外の調査と臨床の合意にもとづく目安です。' },
  'lv4:知識:0': { level: 'B', refs: [R.safran2011, R.safran, R.eubanks] },
  'lv4:知識:1': { level: 'D', refs: [R.safran], see: [R.safran2011], note: '7類型は成長の書の独自の観察分類です。教えるときも「研究上の分類(引きこもり型・対立型)」と分けて伝えてください。' },
  'lv4:知識:2': { level: 'B', refs: [R.bordin, R.fluckiger, R.safran2011, R.eubanks] },
  'lv4:知識:3': { level: 'D', refs: [R.snsGl, R.snsHb, R.snsCb, R.suler], note: PRACTICE },
  'lv4:知識:4': { level: 'A', refs: [R.cpLaw, R.cpDoctor, R.jacppGd, R.gkText3, R.gkMhlw, R.takahashi] },
  // ===== Lv.5 =====
  'lv5:マインド（自己観察と後進支援）:0': { level: 'B', refs: [R.hayesCt, R.gelso], see: [R.ctIto] },
  'lv5:マインド（自己観察と後進支援）:1': { level: 'C', refs: [R.hook, R.supGl, R.bernard] },
  'lv5:マインド（自己観察と後進支援）:2': { level: 'C', refs: [R.ctIto, R.heimann, R.gelso, R.hayesCt] },
  'lv5:マインド（自己観察と後進支援）:3': { level: 'C', refs: [R.ronnestad, R.stoltenberg] },
  'lv5:マインド（自己観察と後進支援）:4': { level: 'C', refs: [R.edmondson, R.supGl, R.bernard] },
  'lv5:スキル（介入と接続——一人で完結させない）:0': { level: 'B', refs: [R.stanley, R.rudd, R.kokoroTalk, R.snsGl, R.takahashi], note: '「自分を傷つけない約束」を取ることと、安全計画をつくることは別物です。約束だけでは安全の裏づけになりません。' },
  'lv5:スキル（介入と接続——一人で完結させない）:1': { level: 'A', refs: [R.cpLaw, R.jacppGd, R.jsccp, R.ppcFaq, R.piLaw, R.gkMhlw, R.gatekeeper] },
  'lv5:スキル（介入と接続——一人で完結させない）:2': { level: 'C', refs: [R.snsGl, R.bernard, R.skovholt] },
  'lv5:スキル（介入と接続——一人で完結させない）:3': { level: 'C', refs: [R.ronnestad, R.rousmaniere, R.hayesCt] },
  'lv5:スキル（介入と接続——一人で完結させない）:4': { level: 'D', refs: [R.polanyi, R.rousmaniere] },
  'lv5:スキル（介入と接続——一人で完結させない）:5': { level: 'C', refs: [R.supGl, R.falender, R.bernard], see: [R.motonaga] },
  'lv5:スキル（介入と接続——一人で完結させない）:6': { level: 'B', refs: [R.deJong, R.lambertRom, R.apaEbpSt, R.fluckiger], see: [R.supGl] },
  'lv5:スキル（介入と接続——一人で完結させない）:7': { level: 'C', refs: [R.kanazawaTerm, R.mhlwCbt], see: [R.stanley], note: '再発のサイン・対処・頼れる人・再相談先を1枚にまとめる形は、成長の書の整理です(安全計画の考え方とも重なります)。' },
  'lv5:知識:0': { level: 'C', refs: [R.ctIto, R.gelso, R.heimann, R.winnicott, R.hayesCt], note: '伊藤(2014)は日本の臨床家による逆転移観の変遷を扱っていますが、ハイマンらの「全体的定義」やGelsoの「統合的定義」そのものは書かれていません。定義の違いは Gelso & Hayes で確かめてください。' },
  'lv5:知識:1': { level: 'C', refs: [R.supGl, R.bernard, R.falender] },
  'lv5:知識:2': { level: 'C', refs: [R.fujioka, R.proqolJ, R.figley, R.proqol, R.skovholt] },
  'lv5:知識:3': { level: 'A', refs: [R.apaEbpSt, R.apaEbp] },
  'lv5:知識:4': { level: 'C', refs: [R.ronnestad, R.stoltenberg], see: [R.motonaga] },
}


// ── 課題ごとの「まず読む」1か所(どの資料の、どこを、何分で、何のために) ──
// 無料で読めて本文を確かめた資料から選ぶ。where/min を省いた場合は資料の既定(META)を使う。
const START: Record<string, StartPoint> = {
  'lv1:バウンダリー（境界線）:0': { r: R.jacppCode, where: '第3条・第4条', min: 3, why: '「自分の欲求や利益のために支援しない」「専門性の限界を自覚する」という2つの条を、自分の役割の一文に入れる材料にする' },
  'lv1:バウンダリー（境界線）:1': { r: R.jacppGd, where: '第4条(pp.10〜12)', min: 8, why: '「扱えない」と言うのは、能力の限界を自覚して範囲内で支援するという倫理上の責務。断り方より先に、なぜ断るのかを押さえる' },
  'lv1:バウンダリー（境界線）:2': { r: R.jacppGd, where: '第8条 多重関係(pp.18〜19)', min: 5, why: '贈り物などを「利益と影響」から判断する考え方を読む。例外を作るなら、その判断を記録して相談する理由がわかる' },
  'lv1:バウンダリー（境界線）:3': { r: R.jacppGd, where: '第8条(pp.18〜19)', min: 5, why: '恋愛関係や自分の利益のための関係が禁じられていることを確かめ、揺らいだときに立ち返る根拠にする' },
  'lv1:バウンダリー（境界線）:4': { r: R.ctIto, why: '逆転移が「治療の妨げ」から「理解の手がかり」へ見直された流れを知ると、感情の動きを1行メモする意味がわかる' },
  'lv1:コンプライアンス（安全条項）:0': { r: R.ikoui, why: '「医行為=医師の医学的判断がなければ危害のおそれがある行為」という解釈を読み、診断や薬の指示が心理職にできない理由を説明できるようにする' },
  'lv1:コンプライアンス（安全条項）:1': { r: R.jacppGd, where: '第5条(2) 秘密保持の限界(pp.13〜14)', min: 8, why: '例外が「本人の承諾」「法令」「自他への危害」の3つに整理されている。法令ごとの違いは、下の各法律の条文で確かめる' },
  'lv1:コンプライアンス（安全条項）:2': { r: R.cpLaw, where: '第42条', min: 2, why: '関係者との連携は法律上の義務。対象外の人を案内することは、断ることではなく連携の一部だとわかる' },
  'lv1:コンプライアンス（安全条項）:3': { r: R.ppcAi, why: '外部AIに入力する前に確かめる2点(利用目的の範囲内か、学習に使われないか)が、そのまま自分のチェック項目になる' },
  'lv1:コンプライアンス（安全条項）:4': { r: R.jacppCode, where: '第11条(情報発信における節度)', min: 2, why: 'SNSでの発信も倫理綱領の対象であることを確かめる' },
  'lv1:運用スキル:0': { r: R.apaTele3, where: '「通信技術と機器」の項目', min: 5, why: '使う機器やソフトの手順を説明できることが、インフォームド・コンセントの一部になっている' },
  'lv1:運用スキル:1': { r: R.apaTele2, where: '「環境・プライバシー」の段落', min: 5, why: '本人の側の環境は心理士が管理できないので一緒に整える、というのが毎回の開始前確認の根拠' },
  'lv1:運用スキル:2': { r: R.apaTele3, where: '「技術的リスクとサービスの制約」と「料金」の項目', min: 5, why: '接続が切れうることを事前に説明しておくことが、トラブルのときに相手を安心させる前提になる' },
  'lv2:マインド:0': { r: R.snsGl, where: '3章Ⅰ「相談を行う基本姿勢」(pp.9〜10)', min: 5, why: '「解決策を急ぎすぎない」「最終的に決めるのは相談者」と書かれている' },
  'lv2:マインド:1': { r: R.rogersEager, where: 'Condition 4: Unconditional Positive Regard(p.110)', min: 5, why: '無条件の肯定的関心が「身につける技法」ではなく態度とされる理由を読む' },
  'lv2:マインド:2': { r: R.presence, why: '「今ここで共にいる」態度がオンラインでも測れ、初回にそれを感じた人ほど疎外感が下がった、という研究の要旨' },
  'lv2:マインド:3': { r: R.ctIto, why: '治療者自身の不安による反応と、相手の葛藤を映した反応を分けて扱う、という見方を読む' },
  'lv2:マインド:4': { r: R.jacppGd, where: '第6条(1)(pp.15〜16)と(6)遠隔心理支援(p.17)', min: 8, why: '説明する事項の一覧と、同意が成り立つ3条件。自分の初回の説明をこの一覧で点検する' },
  'lv2:スキル:0': { r: R.mhlwCbt, why: '型の一例として、1回の面接の流れが示されている。成長の書の型と並べて、どこが同じでどこが違うかを見る' },
  'lv2:スキル:1': { r: R.mhlwCbt, where: '2.4 病歴聴取と問題点の整理(pp.7〜8)', min: 5, why: '初回に何を聞き、どう整理するかの具体例(CBTの場合)' },
  'lv2:スキル:2': { r: R.elliott, where: 'Therapeutic Practices(pp.11〜12)', min: 10, why: '共感と結果の関連(r=.28)と、「共感が伝わっているかを相手に確かめる」などの実践の提言' },
  'lv2:スキル:3': { r: R.snsGl, where: '3章Ⅲ(pp.11〜14)と応答例表(pp.27〜28)', min: 15, why: '「おうむ返しの多用を避け、受け止めの言葉や質問を加える」など、文字で反映するときの工夫と応答例' },
  'lv2:スキル:4': { r: R.snsGl, why: '短文で区切る・相手のペースに合わせるなど、長文に疲弊しないやり取りの工夫' },
  'lv2:知識:0': { r: R.snsGl, where: '3章Ⅰ「相談を行う基本姿勢」(pp.9〜10)', min: 5, why: '傾聴が中心で、決めるのは相談者——アドバイスや友人関係との違いを説明する材料' },
  'lv2:知識:1': { r: R.elliott, where: 'Definitions and Measures(pp.2〜5)', min: 15, why: '共感の定義と、本人・観察者・セラピストで評価が違うこと。技法を「相手にどう届いたか」で考える土台' },
  'lv2:知識:2': { r: R.sfbt, where: '第1章第2節 1.(pp.8〜11)と Table 1(p.11)', min: 10, why: '解決志向の4つの質問と質問例。CBTのマニュアル(問題志向)と並べて違いを説明する' },
  'lv2:知識:3': { r: R.jacppGd, where: '第7条(pp.17〜18)', min: 5, why: '記録の目的(本人の福利)、終了後5年の保管、本人の開示請求への対応' },
  'lv2:知識:4': { r: R.jacppGd, where: '第6条(1)(pp.15〜16)', min: 5, why: '料金・期間・形態などを事前に説明する根拠' },
  'lv2:セッション終了スキル:0': { r: R.mhlwCbt, where: '1.4 セッションの流れ(p.4)と2.6 ホームワークの設定(p.9)', min: 8, why: 'ホームワークを話し合って決め、無理強いしないという進め方' },
  'lv3:マインド（自己安定）:0': { r: R.kokoroTalk, why: 'TALKの原則(心配を伝える・率直に尋ねる・聴く・安全を確保する)。評価せずに受け止めたあと、何をするかがわかる' },
  'lv3:マインド（自己安定）:1': { r: R.ctIto, why: '自分の動揺を「なかったこと」にせず、相手を理解する情報として吟味する見方' },
  'lv3:マインド（自己安定）:2': { r: R.kokoroTalk, why: '死にたい気持ちを「率直に尋ねる」ことが勧められている——重い話題を避けないことの根拠' },
  'lv3:マインド（自己安定）:3': { r: R.ronnestad, why: '「絶え間ない内省が成長を支える」というテーマ。否定的なフィードバックを成長の材料にする見方' },
  'lv3:マインド（自己安定）:4': { r: R.supGl, why: 'SVでは役割と期待を明確にし、能力の問題には早めに対処する、と指針に書かれている' },
  'lv3:スキル（型の維持＋技法の初期実装）:0': { r: R.tvic, where: '「TVICの原則」の「非審判的なアプローチ」などの個人の実践', min: 10, why: '自分の基準を当てはめず、その人の背景や文化に合わせる、という個人レベルの実践' },
  'lv3:スキル（型の維持＋技法の初期実装）:1': { r: R.mhlwCbt, where: '4.3 3つのコラムの書き方(pp.14〜15)と5.2 行動実験(p.16)', min: 10, why: '状況・気分・自動思考の分け方と、行動実験を使う段階' },
  'lv3:スキル（型の維持＋技法の初期実装）:2': { r: R.actJ, why: '6つのコアプロセスの定義を一つずつ読み、脱フュージョンと価値がどこに位置づくかを確かめる' },
  'lv3:スキル（型の維持＋技法の初期実装）:3': { r: R.miJ, why: '両価性・チェンジトーク・MIスピリットを日本語で確かめる(看護の研究なので、技法の説明として読む)' },
  'lv3:スキル（型の維持＋技法の初期実装）:4': { r: R.snsGl, where: '3章Ⅱ「SNS活用の強み・弱み」(pp.10〜11)', min: 5, why: '文字だけのやり取りでは認識がずれやすく、強い反応が出やすい前提を読む' },
  'lv3:スキル（型の維持＋技法の初期実装）:5': { r: R.jacppGd, where: '第9条(2)(3)(pp.20〜21)', min: 5, why: '連携は原則として本人の同意のうえで。主治医の指示は「密接な連携」の意味' },
  'lv3:スキル（型の維持＋技法の初期実装）:6': { r: R.childAbuse, why: '通告先と「守秘義務は通告を妨げない」の条文。障害者・高齢者・DVは、下の各条文と比べる' },
  'lv3:スキル（型の維持＋技法の初期実装）:7': { r: R.padesky, where: '2つのモデルの紹介(pp.3〜5)', min: 15, why: '本人の言葉で見立てをつくる2つのモデル。5つの欄(きっかけ・続かせているもの・強み・環境・望む変化)の考え方の土台' },
  'lv3:スキル（型の維持＋技法の初期実装）:8': { r: R.kanazawaTerm, where: '4.実践への示唆(pp.59〜60)', min: 5, why: '初回から目標・期間・終結の見通しを話し、経過を確かめることが勧められている' },
  'lv3:知識:0': { r: R.apaEbpSt, why: '技法を選ぶ根拠を「研究・臨床的専門性・本人の特性と選好」の3つで説明する枠組み' },
  'lv3:知識:1': { r: R.tic, why: 'Realize・Recognize・Respond・Resist re-traumatization の4つと、回復力・安全・協働の視点' },
  'lv3:知識:3': { r: R.snsGl, where: '2章Ⅰ(4)緊急時への対応(p.6)と3章Ⅳ-6(6)緊急対応(p.25)', min: 8, why: 'その場に行けない前提で、事前に何を決めておき、緊急時にどう動くか' },
  'lv4:マインド（見立て視点）:0': { r: R.safran2011, where: 'Therapeutic Practices(p.86)', min: 5, why: '亀裂への応じ方の提言(防衛しない・自分の関与を認める・言ってくれたことを認める)' },
  'lv4:マインド（見立て視点）:1': { r: R.safran2011, where: 'Therapeutic Practices(p.86)', min: 5, why: '自分の関与を認めることが、修復の提言の中心にある' },
  'lv4:マインド（見立て視点）:2': { r: R.safran2011, where: 'Results(pp.83〜84)', min: 8, why: '修復と結果の関連(r=.24・3研究)と、亀裂のない事例とは比べていないという限界' },
  'lv4:マインド（見立て視点）:3': { r: R.snsGl, why: '返信が遅れるときに先に伝えるなど、やり取りの時間の扱いの工夫(「間を置く」こと自体は書かれていない)' },
  'lv4:マインド（見立て視点）:4': { r: R.supGl, why: 'SVで関係のひずみを扱うのは当然の仕事、と指針に書かれている' },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:0': { r: R.gkText3, why: '危険因子11項目と防御因子9項目。計画・手段・時期・支えの4つ以外に何を見るかの一覧' },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:1': { r: R.safran2011, where: 'Therapeutic Practices(p.86)', min: 5, why: '研究上の亀裂への応じ方。迎合を見つけたあとの関わりの土台' },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:2': { r: R.safran2011, where: 'Therapeutic Practices(p.86)', min: 5, why: '責めずに観察として伝える関わりの土台(研究上の分類では引きこもり型)' },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:3': { r: R.safran2011, where: 'Therapeutic Practices(p.86)', min: 5, why: '防衛せずに応じ、自分の関与を認める——課題の行動そのもの' },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:4': { r: R.snsGl, where: '3章Ⅳ-7 相談の終了(pp.25〜26)', min: 5, why: '応答が途切れたときの扱いと「要フォロー」として再接続の余地を残す考え方' },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:5': { r: R.miJ, where: 'p.26(MIスピリット)', min: 3, why: '決定を本人に返す関わり(喚起・自律の尊重)の日本語での説明' },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:6': { r: R.safran2011, where: 'Therapeutic Practices(p.86)', min: 5, why: '研究上の亀裂への応じ方。感情に安全に近づくための関係の土台' },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:7': { r: R.kokoroTalk, why: '極端な発言の裏に希死念慮がないか、まず率直に確かめる' },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:8': { r: R.snsGl, why: '返信が遅れるときは先に伝えるなど、時間の扱いの工夫' },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:9': { r: R.padesky, where: '5-Part Model: Interview Guidelines(p.5)', min: 10, why: '本人の言葉で見立てを一緒に描くための質問の手引き' },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:10': { r: R.deJong, why: '経過を測って返すことの効果は小さいが一貫している——過信せず、本人と方針を選ぶ習慣にする根拠' },
  'lv4:スキル（リスク見立て＋ラプチャー修復）:11': { r: R.kanazawaTerm, where: '4.実践への示唆(pp.59〜60)', min: 5, why: '回数や終わる理由の認識がずれやすいこと、初回から終結の見通しを話す意味' },
  'lv4:知識:0': { r: R.safran2011, where: 'Definitions and Measures(p.80)と Therapeutic Practices(p.86)', min: 10, why: '亀裂の捉え方と修復の進め方を、自分の言葉で説明する材料' },
  'lv4:知識:1': { r: R.safran2011, where: 'Definitions and Measures(p.80)', min: 5, why: '研究上の亀裂の捉え方を確かめ、成長の書の7類型と分けて教える' },
  'lv4:知識:2': { r: R.fluckiger, why: '同盟と結果の関連(r=.278)と、11の実践の提言' },
  'lv4:知識:3': { r: R.snsGl, where: '3章Ⅱ・Ⅲ(pp.10〜14)', min: 10, why: '文字相談の強み・弱みと注意点。指標を挙げるときの土台(指標そのものは実践知)' },
  'lv4:知識:4': { r: R.gkText3, why: '危険因子と防御因子を並べ、医療・行政につなぐ判断の材料にする' },
  'lv5:マインド（自己観察と後進支援）:0': { r: R.ctIto, why: 'イライラや特別扱いしたい気持ちを、相手を理解する情報として吟味する見方' },
  'lv5:マインド（自己観察と後進支援）:1': { r: R.supGl, where: '「多様性」と「SVの能力」の領域', min: 5, why: '自分の偏りへの気づきを続けることが、SVの指針に入っている' },
  'lv5:マインド（自己観察と後進支援）:2': { r: R.ctIto, why: '治療者自身の不安によるものは抑え、相手の葛藤の反映は理解に使う、という使い分け' },
  'lv5:マインド（自己観察と後進支援）:3': { r: R.ronnestad, where: '6つの段階(pp.10〜27)。まず「初心の学生」(pp.11〜14)', min: 15, why: '後進の「できていない」を、発達段階の特徴として読む' },
  'lv5:マインド（自己観察と後進支援）:4': { r: R.supGl, where: '「SV関係」と「評価とフィードバック」の領域', min: 5, why: '関係を明確にし、フィードバックを具体的な行動に結びつける' },
  'lv5:スキル（介入と接続——一人で完結させない）:0': { r: R.snsGl, where: '3章Ⅳ-4 死にたい気持ちについての質問等(pp.19〜20)', min: 5, why: '方法・時期を率直に確かめ、手段を遠ざけるなど、安全のための具体的な働きかけ' },
  'lv5:スキル（介入と接続——一人で完結させない）:1': { r: R.jacppGd, where: '第9条(2)(3)(pp.20〜21)', min: 5, why: '連携は本人の同意を原則に、緊急で事前に得られないときは事後に説明する' },
  'lv5:スキル（介入と接続——一人で完結させない）:2': { r: R.snsGl, where: '2章Ⅰ 相談体制等(pp.4〜7)', min: 10, why: '相談員を複数にし、SVと連携する体制が求められている——一人で抱えない設計の根拠' },
  'lv5:スキル（介入と接続——一人で完結させない）:3': { r: R.ronnestad, why: '絶え間ない内省が成長を支える、というテーマ' },
  'lv5:スキル（介入と接続——一人で完結させない）:5': { r: R.supGl, where: '「評価とフィードバック」の領域', min: 5, why: '具体的な行動に結びつけ、時機を逃さず、録音や陪席で確かめる' },
  'lv5:スキル（介入と接続——一人で完結させない）:6': { r: R.deJong, why: 'うまく進んでいない人には、対応のヒントを示す道具が効きやすかった(d=0.36)' },
  'lv5:スキル（介入と接続——一人で完結させない）:7': { r: R.kanazawaTerm, where: '2.終結行動(pp.54〜55)', min: 5, why: '振り返り・今後の検討・お別れの3段階' },
  'lv5:知識:0': { r: R.ctIto, why: '日本の臨床家による逆転移の見方の変遷(定義の違いは Gelso & Hayes で補う)' },
  'lv5:知識:1': { r: R.supGl, why: 'SVが評価と育成を含む継続的な関係であることを確かめる(コンサルテーションとの違いそのものは書かれていない)' },
  'lv5:知識:2': { r: R.fujioka, why: '共感的に関わるほど二次的外傷性ストレスにさらされるという仕組みと、支えになる要因' },
  'lv5:知識:3': { r: R.apaEbpSt, why: 'EBPの定義(研究・臨床的専門性・本人の特性と選好の統合)' },
  'lv5:知識:4': { r: R.ronnestad, where: '6つの段階(pp.10〜27)', min: 20, why: '段階ごとの特徴を、後進の評価の物差しとして読む' },
}

export function refsFor(lvId: string, cat: string, i: number): TaskRefs | undefined {
  const k = `${lvId}:${cat}:${i}`
  const t = TASK_REFS[k]
  if (!t) return undefined
  const st = START[k]
  return st ? { ...t, start: { ...st, where: st.where ?? st.r.where, min: st.min ?? st.r.min } } : t
}

// ── 「今日の一頁」(毎日の学習)の根拠 ──
export const DAILY_REFS: { refs: Ref[]; note: string } = {
  refs: [
    { k: '研究', t: 'Dunlosky, Rawson, Marsh, Nathan & Willingham (2013) Improving students\' learning with effective learning techniques. Psychological Science in the Public Interest, 14(1)(紹介記事:APS「Which Study Strategies Make the Grade?」)', u: 'https://psychologicalscience.org/?p=82014', free: true, v: '本文確認', where: '紹介記事の全体', min: 5,
      read: '10の学習法を評価したレビュー。効果が高いと評価されたのは「練習テスト(自分で思い出してみる)」と「分散学習(間隔をあけて学ぶ)」。読み返し・要約・マーカー引きは効果が低い評価', cite: '紹介記事で確認。報告書本体(全文無料)のページは未確認' },
    { k: '研究', t: '田中紗枝子「誤情報の検索が正情報の学習を促進するメカニズム―検索する情報量とその処理の観点からの検討―」広島大学 学位論文', u: 'https://ir.lib.hiroshima-u.ac.jp/48383/files/34799', free: true, v: '本文確認', where: '第1章第1節「テストによる学習促進」(p.2〜)', min: 10,
      read: '日本語で読める。思い出す練習(テスト)をした群は、5分後の成績では劣っても1週間後には上回った(Roediger & Karpicke 2006)。思い出そうとして間違えても、そのあとで答えを確かめれば学習が進む(誤検索効果)', cite: '提出年は未確認' },
    { k: '研究', t: 'McLeod (2021) How students use deliberate practice during the first stage of counsellor training. Counselling and Psychotherapy Research', u: 'https://core.ac.uk/download/388546405.pdf', free: true, v: '本文確認', where: '1. Introduction(p.1)と 6. Implications for practice(p.10)', min: 10,
      read: '全文無料。意図的な練習(deliberate practice)=苦手な技法を特定し、少し難しい場面で、フィードバックを受けながら繰り返し練習すること。短い研修だけでは効果が出にくく、記録や繰り返しの仕組みが要る。この研究自体は学生の自己報告で、クライアントの結果は測っていない' },
    { k: '専門書', t: 'Rousmaniere『Deliberate Practice for Psychotherapists』Routledge, 2017', read: '録音・振り返り・フィードバックをくり返す「意図的な練習」', v: '未確認' },
  ],
  note: '「思い出してから確かめる」「間隔をあけて繰り返す」の効果は、主に知識を覚える学習で確かめられたものです(①の課題を思い出す練習にあたります)。②の一言ロールプレイのように面接での応答を組み立てる練習は、意図的な練習(deliberate practice)の考え方に近いものですが、毎日の短い練習がクライアントの結果を良くするかどうかは、まだ確かめられていません。',
}
