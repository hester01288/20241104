import { useState } from "react";
import Login from "./Login";
function MyPage() {
 const [id, setId] = useState("");
 const [pwd, setPwd] = useState("");
 const changeId = (e) => {
 setId(e.target.value);
 };
 const changePwd = (e) => {
 setPwd(e.target.value);
 };
 if (id === "123" && pwd === "1111") {
 return (
 <div>
 <h3>김창복의 My Page</h3>
 <p>로그인 해야 볼 수 있는 개인자료</p>
 </div> );
 } 
 else
 return (
 <Login id={id} pwd={pwd} changeId={changeId} changePwd={changePwd} />
 );
};
export default MyPage ;