import ArticleLayout from "../../components/ArticleLayout"
import { Link } from "react-router-dom"

export default function HelperSelfComplexity() {
  return (
    <ArticleLayout
title="仕事だけの自分になると壊れやすい理由｜自己複雑性の心理学"
description="「支援者である自分」しかなくなったとき、職場でのダメージが全部に響いてしまう——これは自己複雑性の低さによるものです。川人ら（2010）の研究から、消耗への脆弱性の構造を解説します。"      url="https://www.ishizue-counseling.jp/articles/helper-self-complexity"
      date="2026-04-18"
      tags={["burnout", "boundary", "compassion"]}
    >
      <p>
        「仕事でうまくいかないと、全部がダメな気がする」<br />
        「休日も利用者のことが頭から離れない」<br />
        「支援職以外の自分が、もうわからなくなってきた」——
      </p>
      <p>
        こうした感覚を持つ支援職の方は少なくありません。
        これは意志の弱さでも、プロ意識の欠如でもありません。
        「自分の中に仕事しかない」という状態が、消耗をより深くしている可能性があります。
      </p>

      <h2>自己複雑性とは何か</h2>
      <p>
        心理学者のLinville（1987）は、自己概念の構造に個人差があることを指摘しました。
        自己複雑性（self-complexity）とは、自分の中に持っている「自己側面」の数と、
        それぞれの側面がどれだけ分化しているかを表す概念です。
      </p>
      <p>
        自己側面には、社会的役割（介護士、親、友人など）、対人関係、趣味・活動、特性、能力など、
        様々なものが含まれます。
        自己複雑性が高い人は「支援職としての自分」「趣味を楽しむ自分」「家族の中での自分」など、
        複数の異なる側面を持っています。
        一方、自己複雑性が低い人は、自己側面の数が少なく、それぞれが似通っています。
      </p>

      <h2>なぜ「仕事しかない」と消耗が深まるのか</h2>
      <p>
        Linville（1987）の理論によれば、自己複雑性が低い場合、
        ある側面でネガティブな出来事が起きると、その影響が他の側面にも波及しやすくなります。
      </p>
      <p>
        支援職に当てはめると、こうなります。
        自己側面が「支援職としての自分」だけに近い状態であれば、
        職場で失敗したとき、利用者に感情的になってしまったとき、
        あるいは職場の人間関係がこじれたとき——
        その影響が「自分すべて」に波及します。
        「仕事でダメだった＝自分がダメだ」という感覚が生じやすくなります。
      </p>
      <p>
        一方、「支援職としての自分」以外にも、趣味、家族、友人関係など
        複数の側面を持っている場合、職場の出来事のネガティブな影響は
        「支援職としての自分」にとどまり、他の側面には波及しにくくなります。
      </p>

      <div className="card">
        <p className="text-sm text-stone-600 leading-[1.9]">
          川人ら（2010）は大学生を対象に、自己複雑性を高める介入プログラムを実施しました。
          1回の心理教育と1週間のホームワーク（毎晩、自分の側面を書き出す）によって、
          肯定的自己複雑性（P-SC）が有意に高まり、
          その後のうつ感情が低減することが確認されました。
          この効果は2週間後の追跡調査でも持続していました。
        </p>
      </div>

      <h2>肯定的側面が特に重要</h2>
      <p>
        研究では、自己複雑性を「肯定的自己複雑性（P-SC）」と「否定的自己複雑性（N-SC）」に分けて分析しています。
      </p>
      <p>
        結果として、うつ感情の低減に特に関連していたのは<strong>肯定的自己複雑性の高まり</strong>でした。
        つまり、「自分のポジティブな側面がいくつあるか、それがどれだけ分化しているか」が
        消耗への緩衝として機能するということです。
      </p>
      <p>
        「自分は○○ができる」「○○の場面では自分らしくいられる」という
        ポジティブな自己側面が複数あることが、職場のストレスから回復する力を支えます。
      </p>

      <h2>支援職が自己複雑性を失いやすい理由</h2>
      <p>
        支援職は、仕事の性質上、自己複雑性が低下しやすい状況に置かれています。
      </p>
      <p>
        長時間労働や持ち帰り仕事によって、仕事以外の活動をする時間と余裕がなくなる。
        強い使命感や責任感から「支援職であること」が自己定義の核になる。
        感情労働による疲弊で、休日も「休んでいる自分」を実感できない——
        これらが重なると、気づかないうちに自己側面が「支援職」一色になっていきます。
      </p>
      <p>
        「趣味を楽しめなくなった」「友人と会う気力がない」という訴えは、
        バーンアウトのサインとしてよく知られていますが、
        同時に自己複雑性の低下を示している可能性もあります。
      </p>

      <h2>小さなところから始める自己側面の回復</h2>
      <p>
        川人らの介入で用いられたのは、毎晩就寝前の10分間に
        「今日気づいた自分の側面」を書き出すというシンプルな方法でした。
        特別なスキルは必要ありません。
      </p>
      <p>
        支援職として消耗している方が、すぐに趣味を再開したり
        人間関係を広げたりするのは難しいかもしれません。
        でも「自分にはどんな側面があったか」「職場以外でどんな自分がいるか」を
        改めて言語化してみることは、小さな一歩として機能します。
      </p>

      <div className="card">
        <p className="text-sm text-stone-600 leading-[1.9]">
          カウンセリングの場では、この「自己側面の整理」を
          専門家と一緒に行うことができます。
          「支援職以外の自分がわからなくなった」という感覚そのものを
          ゆっくりほぐしていくことが、回復の入り口になることがあります。
        </p>
      </div>

      <div className="mt-8 p-5 rounded-2xl bg-stone-50 border border-stone-200">
        <p className="text-sm font-medium text-stone-700 mb-3">関連する記事・ツール</p>
        <div className="flex flex-col gap-2">
          <Link to="/articles/helper-burnout-signs" className="text-sm text-[#7EB8A4] hover:underline">
            → バーンアウトの前兆（サイン）とは
          </Link>
          <Link to="/articles/helper-self-criticism-culture" className="text-sm text-[#7EB8A4] hover:underline">
            → なぜ支援職は自分を責めやすいのか
          </Link>
          <Link to="/articles/helper-empathy-check" className="text-sm text-[#7EB8A4] hover:underline">
            → 共感疲労チェック｜支援職のための20項目診断
          </Link>
        </div>
      </div>

      <p className="text-xs text-stone-400 mt-6 leading-relaxed">
        参考文献：川人潤子・堀匡・大塚泰正（2010）「大学生の抑うつ予防のための自己複雑性介入プログラムの効果」心理学研究，81(2), 140-148 ／ Linville, P. W.（1987）Self-complexity as cognitive buffer against stress-related illness and depression. Journal of Personality and Social Psychology, 52, 663-676 ／ Morgan, H. J., & Janoff-Bulman, R.（1994）Positive and negative self-complexity. Journal of Social and Clinical Psychology, 13, 63-85
      </p>
    </ArticleLayout>
  )
}
