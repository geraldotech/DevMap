const host = location.host;
console.log(host);
const website = `${window.location}/img`;
console.log(website);

var About = {
  template: `<div><h1>About</h1><p>This is about page</p>
	<img src="../src/assets/nova.jpg" alt="img"/>
	</div>`,
};
export default About;
