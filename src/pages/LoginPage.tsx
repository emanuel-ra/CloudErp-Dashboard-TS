import "./LoginPage.css";
import { useLoginStore } from "../stores/auth";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useThemeStore } from "../stores/ui/theme";
import { useTranslation } from "react-i18next";

interface Error {
  error: boolean;
  msg: string;
}

export const LoginPage = () => {
  const { t } = useTranslation();
  const theme = useThemeStore((state) => state.theme);
  const [errorUserName, setErrorUserName] = useState<Error>();
  const [errorPassword, setErrorPassword] = useState<Error>();

  const LogIn = useLoginStore((state) => state.logIn);
  const session = useLoginStore((state) => state.session);
  const errors = useLoginStore((state) => state.errors);

  const handleLogin = async () => {
    const username = (document.getElementById("UserName") as HTMLInputElement)
      .value;
    const password = (document.getElementById("Password") as HTMLInputElement)
      .value;

    if (username === "") {
      setErrorUserName({ error: true, msg: "type your username" });
      return;
    } else {
      setErrorUserName({ error: false, msg: "" });
    }

    if (password === "") {
      setErrorPassword({ error: true, msg: "type your password" });
      return;
    } else {
      setErrorPassword({ error: false, msg: "" });
    }

    LogIn({ username, password });
  };

  if (session?.token) {
    return <Navigate to={`/`} />;
  }
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <main
        data-mode={theme}
        className={`w-full min-h-dvh flex flex-col gap-2 justify-center items-center `}
      >
        <div className="lg:w-1/4 p-4 rounded flex flex-col bg-white gap-y-4">
          <h1 className="text-center font-semibold text-slate-700">
            Cloud ERP
          </h1>

          <div>
            <label
              htmlFor="Username"
              className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="text"
                id="UserName"
                className="peer h-11 w-full px-3 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                placeholder="Username"
              />

              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                {t("loginPage.username")}
              </span>
            </label>
            {errorUserName?.error && (
              <small className="text-red-600 font-semibold">
                {t(`loginPage.${errorUserName.msg}`)}
              </small>
            )}
          </div>

          <div>
            <label
              htmlFor="Password"
              className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="password"
                id="Password"
                className="peer h-11 w-full px-3 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                placeholder="Password"
              />

              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                {t("loginPage.password")}
              </span>
            </label>
            {errorPassword?.error && (
              <small className="text-red-600 font-semibold">
                {t(`loginPage.${errorPassword.msg}`)}
              </small>
            )}
          </div>

          <button
            className="bg-blue-700/90 text-white hover:bg-blue-700 py-2 rounded"
            onClick={handleLogin}
          >
            {t("loginPage.login")}
          </button>
        </div>
        {errors?.length && (
          <div
            role="alert"
            className="rounded border-s-4 border-red-500 bg-red-50 p-4"
          >
            <strong className="block font-medium text-red-800">
              {" "}
              {t("errors.something went wrong")}{" "}
            </strong>

            <p className="mt-2 text-sm text-red-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              quasi assumenda numquam deserunt consectetur autem nihil quos
              debitis dolor culpa.
            </p>
          </div>
        )}
      </main>
    </>
  );
};
