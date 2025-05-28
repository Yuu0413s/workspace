import './App.css';

function App() {
  return (
    <div className="Portfolio">
      <top>
        <h1>Portfolio</h1>
        <p>Learning data science and programming in university...</p>
        <nav>
          <li><a href="#About">About Me</a></li>
          <li><a href="#qualifications">Qualifications</a></li>
          <li><a href="#language">Programming language</a></li>
          <li><a href="#research">Research</a></li>
          <li><a href="#sns">SNS</a></li>
        </nav>
      </top>

      <main>
        <section id="About">
          <h2>自己紹介</h2>
          <ul>
            <blockquote>
              <strong>大学にてデータサイエンスの勉強をしながら、時系列データを用いたシステムの作成や研究を行っています。
              <p>ユーザーのQOLを向上させることのできるシステムを開発することが目標です。</p></strong>
            <p>名前:柴田 優太(シバタ ユウタ)</p>
            <p>年齢:20</p>
            <p>所属:武蔵野大学データサイエンス学部データサイエンス学科(28卒)</p>
            </blockquote>
          </ul>
        </section>

        <section id="qualifications">
          <h2>所持資格</h2>
          <ul>
            <li>実用英語技能検定 2級(最高スコア2158)</li>
            <li>珠算能力検定 準2級</li>
            <li>暗算検定 3級</li>
          </ul>
        </section>

        <section id="language">
          <h2>学習中のプログラミング言語</h2>
          <ul>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </section>

        <section id="research">
          <h2>現在の研究</h2>
          <ul>
            <li>研究タイトル:時系列データと仕事率を用いたパーソナル管理システムの実現</li>
            <li>研究の概要:<a href="https://docs.google.com/presentation/d/1yz86yZaYNgM084oPdGhHmK8QBR4xkimi5nGWIHKdaDI/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Googleスライド</a></li>
            <li>研究のゴール:時空間データと仕事率を用いた仕事、健康管理を行い個々の作業パフォーマンス向上と健康維持の両立を図ること</li>
            <li>1年次の研究成果(PDFファイル):<a href="pdf.html" target="_blank" rel="noopener noreferrer">1年次成果発表会ポスター</a></li> {/* pdf.htmlはpublicフォルダに配置想定 */}
          </ul>
        </section>

        <section id="sns">
          <h2>各種SNS</h2>
          <ul>
            <li>GMail : y.shibata0820@gmail.com</li>
            <li><a href="https://github.com/Yuu0413" target="_blank" rel="noopener noreferrer">Github</a></li>
            <li><a href="https://www.wantedly.com/id/yuu_0413" target="_blank" rel="noopener noreferrer">Wantedly</a></li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Yuta Shibata</p>
      </footer>
    </div>
  );
}

export default App;
