export const Footer = () =>{
    return (
    <footer className="[grid-area:foot] footer">
      <span className="">
        © {new Date().getFullYear()}, made with ❤, by{" "}
        <a className="font-semibold hover:text-slate-700 dark:hover:text-white" href="#">IT</a>.
      </span>
    </footer>)
}