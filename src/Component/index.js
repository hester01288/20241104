import "../Component/CSS/index.css"

const Index = () => {
  return (
    <div className="mian" id="class">
      <div align="center">
        <h1 id="title">여러분,안녕하세요~~~~</h1>
        <table border="0">
          <tbody>
            <tr>
              <td rowSpan="4">
                <img src="/image/1.jpg" alt="나의 사진!!" id="pic" />
              </td>
              <td>
                <div align="center">
                  <h3>영환환</h3>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div align="center">
                  <h3>학생</h3>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div align="center">
                  <h3>hester01288@163.com || 010-6861-9063</h3>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div align="center">
                  <h3>지역 || 한국</h3>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Index;