import React from "react";

export default function Modal({ setOpenModal }) {
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={() => setOpenModal(false)}
        ></div>
        {/*  */}
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-3 lg:flex-none lg:px-6 xl:px-3">
              <div className="mx-auto w-full max-w-sm lg:w-96">
                <div>
                  <h2 className="mt-8 text-2xl leading-9 tracking-tight text-gray-900 text-center">
                    Зарегистироваться
                  </h2>
                </div>

                <div className="mt-10">
                  <div>
                    <form action="#" method="POST" className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Имя
                        </label>
                        <div className="mt-2">
                          <input
                            id="name"
                            name="name"
                            type="name"
                            autoComplete="name"
                            required
                            className="block w-full rounded-sm border-0 py-1.5 shadow-sm ring-1 ring-inset ring-lime-900 focus:ring-0 focus:ring-lime-800 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="surname"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Фамилия
                        </label>
                        <div className="mt-2">
                          <input
                            id="surname"
                            name="surname"
                            type="surname"
                            autoComplete="current-surname"
                            required
                            className="block w-full rounded-sm border-0 py-1.5 shadow-sm ring-1 ring-inset ring-lime-900 focus:ring-0 focus:ring-lime-800 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Эл. почта
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="current-password"
                            required
                            className="block w-full rounded-sm border-0 py-1.5 shadow-sm ring-1 ring-inset ring-lime-900 focus:ring-0 focus:ring-lime-800 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="pass"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Пароль
                        </label>
                        <div className="mt-2">
                          <input
                            id="pass"
                            name="pass"
                            type="pass"
                            autoComplete="current-password"
                            required
                            className="block w-full rounded-sm border-0 py-1.5 shadow-sm ring-1 ring-inset ring-lime-900 focus:ring-0 focus:ring-lime-800 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="pass2"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Повторите пароль
                        </label>
                        <div className="mt-2">
                          <input
                            id="pass2"
                            name="pass2"
                            type="pass2"
                            autoComplete="current-password"
                            required
                            className="block w-full rounded-sm border-0 py-1.5 shadow-sm ring-1 ring-inset ring-lime-900 focus:ring-0 focus:ring-lime-800 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="remember-me"
                            className="ml-3 block text-sm leading-6 text-gray-700"
                          >
                            Я принимаю пользовательское соглашение
                          </label>
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="flex w-full justify-center rounded-md bg-lime-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
                        >
                          Зарегистироватьсяя
                        </button>
                      </div>
                      <div className="vhod text-center">Войти</div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
}
