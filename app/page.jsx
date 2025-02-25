"use client"
import { useAccount } from "wagmi";
import { useState } from "react";

export default function Home() {
  const { isConnected } = useAccount();
  const [usdt, setUsdt] = useState(1);
  const [trx, setTrx] = useState(0); 

  const handleUsdtChange = (e) => {
    const usdtValue = parseFloat(e.target.value); 
    setUsdt(usdtValue);  
    const exchangeRate = 4.03; 
    setTrx(usdtValue * exchangeRate);
  };

  const [openBlock, setOpenBlock] = useState(null);

  const toggleBlock = (index) => {
    setOpenBlock(openBlock === index ? null : index);
  };

  return (
    <>
    <div className="bg-[#061313] w-full min-h-screen flex flex-col pt-8 items-center text-white px-6">
  <h1 className="absolute opacity-0">
    Buy TRX Instantly with USDT – No Extra Fees, Fast & Secure
  </h1>{" "}
  <div className="w-full md:max-w-96">
    <div>
      <div className="mb-6 flex justify-center items-center gap-4">
        <div
          style={{
            transform: "none",
          }}>
          <svg
            height="80"
            viewBox="0 0 2000 2000"
            width="80"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1000 0c552.26 0 1000 447.74 1000 1000s-447.76 1000-1000 1000S0 1552.38 0 1000 447.68 0 1000 0"
              fill="#53ae94"
            />
            <path
              d="M1123.42 866.76V718h340.18V491.34H537.28V718H877.5v148.64C601 879.34 393.1 934.1 393.1 999.7s208 120.36 484.4 133.14v476.5h246V1132.8c276-12.74 483.48-67.46 483.48-133s-207.48-120.26-483.48-133m0 225.64v-.12c-6.94.44-42.6 2.58-122 2.58-63.48 0-108.14-1.8-123.88-2.62v.2C633.34 1081.66 451 1039.12 451 988.22S633.36 894.84 877.62 884v166.1c16 1.1 61.76 3.8 124.92 3.8 75.86 0 114-3.16 121-3.8V884c243.8 10.86 425.72 53.44 425.72 104.16s-182 93.32-425.72 104.18"
              fill="#fff"
            />
          </svg>
        </div>
        <svg
          className="lucide lucide-arrow-right"
          fill="none"
          height="64"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="64"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
        <div
          style={{
            transform: "none",
          }}>
          <svg
            height="80"
            viewBox="0 0 32 32"
            width="80"
            xmlns="http://www.w3.org/2000/svg">
            <g fill="none">
              <circle cx="16" cy="16" fill="#EF0027" r="16" />
              <path
                d="M21.932 9.913L7.5 7.257l7.595 19.112 10.583-12.894-3.746-3.562zm-.232 1.17l2.208 2.099-6.038 1.093 3.83-3.192zm-5.142 2.973l-6.364-5.278 10.402 1.914-4.038 3.364zm-.453.934l-1.038 8.58L9.472 9.487l6.633 5.502zm.96.455l6.687-1.21-7.67 9.343.983-8.133z"
                fill="#FFF"
              />
            </g>
          </svg>
        </div>
      </div>
      <h1
        className="text-4xl font-bold mb-4 text-center"
        style={{
          transform: "none",
        }}>
        Покупайте TRX за USDT
      </h1>
      <p className="text-gray-400 text-center">
        Даже если сейчас у вас совсем нет TRX.
      </p>
    </div>
    <div className="h-4" />
    <div className="space-y-4 bg-gray-800 px-4 py-3 rounded-lg">
      <div className="space-y-3">
        <p className="text-center text-xl">Обмен USDT на TRX</p>
        <div className="space-y-2">
          <div className="relative">
            <input
              className="w-full px-3 py-3 pr-16 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#339192]"
              value={usdt}
              onChange={handleUsdtChange}
              id="spendUsdt"
              type="text"
            />
            <div className="absolute flex items-center gap-1.5 right-2 top-1/2 -translate-y-1/2 bg-gray-800 px-2.5 py-1.5 rounded-md text-sm text-gray-200">
              <svg
                height="24"
                viewBox="0 0 2000 2000"
                width="24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1000 0c552.26 0 1000 447.74 1000 1000s-447.76 1000-1000 1000S0 1552.38 0 1000 447.68 0 1000 0"
                  fill="#53ae94"
                />
                <path
                  d="M1123.42 866.76V718h340.18V491.34H537.28V718H877.5v148.64C601 879.34 393.1 934.1 393.1 999.7s208 120.36 484.4 133.14v476.5h246V1132.8c276-12.74 483.48-67.46 483.48-133s-207.48-120.26-483.48-133m0 225.64v-.12c-6.94.44-42.6 2.58-122 2.58-63.48 0-108.14-1.8-123.88-2.62v.2C633.34 1081.66 451 1039.12 451 988.22S633.36 894.84 877.62 884v166.1c16 1.1 61.76 3.8 124.92 3.8 75.86 0 114-3.16 121-3.8V884c243.8 10.86 425.72 53.44 425.72 104.16s-182 93.32-425.72 104.18"
                  fill="#fff"
                />
              </svg>
              <p>USDT</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="relative">
            <input
              className="w-full px-3 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#339192]"
              value={trx}
              id="buyTrx"
              type="text"
              readOnly
            />
            <div className="absolute flex items-center gap-1.5 right-2 top-1/2 -translate-y-1/2 bg-gray-800 px-2.5 py-1.5 rounded-md text-sm text-gray-200">
              <svg
                height="24"
                viewBox="0 0 32 32"
                width="24"
                xmlns="http://www.w3.org/2000/svg">
                <g fill="none">
                  <circle cx="16" cy="16" fill="#EF0027" r="16" />
                  <path
                    d="M21.932 9.913L7.5 7.257l7.595 19.112 10.583-12.894-3.746-3.562zm-.232 1.17l2.208 2.099-6.038 1.093 3.83-3.192zm-5.142 2.973l-6.364-5.278 10.402 1.914-4.038 3.364zm-.453.934l-1.038 8.58L9.472 9.487l6.633 5.502zm.96.455l6.687-1.21-7.67 9.343.983-8.133z"
                    fill="#FFF"
                  />
                </g>
              </svg>
              <p>TRX</p>
            </div>
          </div>
        </div>
        <div className="space-y-2 mt-4">
          <button
            className="text-gray-400 text-sm hover:text-gray-300 flex items-center gap-1"
            id="openModal2"
            >
            Дополнительно{" "}
            <svg
              className="lucide lucide-chevron-down"
              fill="none"
              height="16"
              id="block"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>
      <div className="space-y-2" id="modal2" role="dialog">
        <p>Получатель TRX:</p>
        <input
          className="w-full px-3 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#339192]"
          defaultValue=""
          type="text"
        />
        <p className="text-gray-400 text-sm">
          Опционально. Используйте это поле если хотите чтобы кто-то другой
          получил купленные TRX.
        </p>
      </div>
      <div>
        <p>Цена TRX: ~ $0.248125</p>
        <p className="text-gray-400 text-sm">
          Конечная цена будет определена в момент покупки.
        </p>
      </div>
      <div>
        <p className="mt-2">
          Всего отдаете: <span id="totalUsdt">4.5</span> USDT
        </p>
        <p className="text-sm text-gray-400">Комиссия сети: 2.5 USDT</p>
      </div>
      <div className="space-y-2">
        <div
          className="h-8 w-full bg-[#2a7475] rounded-md"
          style={{
            display: "none",
            width: "0px",
          }}
        />
       <w3m-button label="Купить TRX" />
        <button
          aria-controls="radix-:r3:"
          aria-expanded="false"
          aria-haspopup="dialog"
          className="w-full flex justify-center"
          data-state="closed"
          type="button">
          <p
            className="border-b-2 text-gray-400 border-gray-400 hover:text-gray-500 hover:border-gray-500"
            id="openModal">
            Как пользоваться сайтом?
          </p>
        </button>
      </div>{" "}
      <div
        className="fixed left-[50%] top-[50%] z-50 hidden w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 bg-gray-800 text-white rounded-lg"
        id="modal"
        role="dialog">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Как пользоваться сайтом?
          </h2>
        </div>
        <p>
          <span className="text-xl">Поддерживаемые кошельки</span>
          <br />
          <span className="text-gray-400">
            buytrx.org работает с Trust Wallet и TronLink.
          </span>
        </p>
        <p>
          <span className="text-xl">Краткая инструкция:</span>
          <br />
          <span className="text-gray-400">
            1. Откройте buytrx.org во встроенном браузере вашего кошелька.
            <br />
            2. Введите сколько TRX вы хотите купить.
            <br />
            3. Нажмите "Купить".
            <br />
            4. Подключите кошелек.
            <br />
            5. Подтвердите перевод USDT.
          </span>
        </p>
        <hr />
        <p className="text-gray-400">
          Смотрите подробную видео инструкцию{" "}
          <a
            className="underline"
            href="https://www.youtube.com/playlist?list=PLnr4C8ZUG7OHUdcr3TiLVJUdOpUCi6Z1f">
            в этом YouTube плейлисте.
          </a>
        </p>
        <button
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
          id="closeModal">
          <svg
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" />
            <path d="M6 6L18 18" />
          </svg>
        </button>
      </div>
      <div className="space-y-1 text-sm">
        <div
          className="text-gray-400 flex flex-row items-center gap-2"
          >
          <div className="w-2 h-2 bg-green-400 animate-pulse rounded-full inline-block" />
          Последняя покупка: минуту назад.
        </div>
        <p className="text-gray-400">
          Все системы в норме на момент 2/24/2025, 2:32:35 PM.
        </p>
      </div>
    </div>
    <div className="pt-4 pb-8 space-y-4" />
    <hr />
    <p className="text-xl mt-4 mb-4">Инструкции и FAQ:</p>
    <div className="space-y-2">
      <div className="rounded-lg border border-gray-700">
        <div className="p-4 space-y-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleBlock(1)}
          >
            <p className="inline">1. Насколько безопасно подключать кошелек к сайту?</p>
            <svg
              className={`lucide lucide-chevron-down w-10 transition-transform duration-300 ${openBlock === 1 ? "rotate-180" : ""}`}
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          {openBlock === 1 && (
            <p className="text-gray-400 word-break w-fit">
              Подключение кошелька показывает сайту адрес вашего кошелька, но не даёт разрешения списывать средства. Это стандартная практика для децентрализованных приложений.
            </p>
          )}
        </div>
        
      </div>
      <div className="rounded-lg border border-gray-700">
      <div className="p-4 space-y-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleBlock(2)}
          >
            <p className="inline">2. Почему я должен доверять buytrx.org?</p>
            <svg
              className={`lucide lucide-chevron-down w-10 transition-transform duration-300 ${openBlock === 2 ? "rotate-180" : ""}`}
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          {openBlock === 2 && (
            <p className="text-gray-400 word-break w-fit">
            Вам нужно доверять сайту только в момент совершения покупки.
            buytrx.org получает доступ только к той сумме USDT, которую вы
            обмениваете. Все остальные средства всегда остаются в вашем
            кошельке.
            </p>
          )}
        </div>
      </div>
      <div className="rounded-lg border border-gray-700">
      <div className="p-4 space-y-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleBlock(3)}
          >
            <p className="inline">3. Какие кошельки вы поддерживаете?</p>
            <svg
              className={`lucide lucide-chevron-down w-10 transition-transform duration-300 ${openBlock === 3 ? "rotate-180" : ""}`}
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          {openBlock === 3 && (
            <p className="text-gray-400 word-break w-fit">
             buytrx.org поддерживает главные Tron (TRC-20) кошельки: TronLink и
             Trust Wallet.
            </p>
          )}
        </div>
      </div>
      <div className="rounded-lg border border-gray-700">
      <div className="p-4 space-y-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleBlock(4)}
          >
            <p className="inline">4. Есть ли KYC?</p>
            <svg
              className={`lucide lucide-chevron-down w-10 transition-transform duration-300 ${openBlock === 4 ? "rotate-180" : ""}`}
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          {openBlock === 4 && (
            <p className="text-gray-400 word-break w-fit">
            Нет. Так как buytrx.org основан на децентрализованных технологиях,
            мы не заправшиваем никаких документов или личной информации.
            </p>
          )}
        </div>
      </div>
      <div className="rounded-lg border border-gray-700">
      <div className="p-4 space-y-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleBlock(5)}
          >
            <p className="inline">5.Нужно ли иметь TRX в кошельке для пользования сайтом?</p>
            <svg
              className={`lucide lucide-chevron-down w-10 transition-transform duration-300 ${openBlock === 5 ? "rotate-180" : ""}`}
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          {openBlock === 5 && (
            <p className="text-gray-400 word-break w-fit">
            Нет. На buytrx.org все комиссии платятся в USDT. buytrx.org сделан
            специально для случая когда у пользователя есть USDT в кошельке, но
            нету TRX.
            </p>
          )}
        </div>
      </div>
      <div className="rounded-lg border border-gray-700">
      <div className="p-4 space-y-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleBlock(6)}
          >
            <p className="inline">6. Насколько быстр процесс покупки?</p>
            <svg
              className={`lucide lucide-chevron-down w-10 transition-transform duration-300 ${openBlock === 6 ? "rotate-180" : ""}`}
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          {openBlock === 6 && (
            <p className="text-gray-400 word-break w-fit">
           Если ничего не идет не так, то обмен совершается в течение 10
           секунд.
            </p>
          )}
        </div>
      </div>
      <div className="rounded-lg border border-gray-700">
      <div className="p-4 space-y-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleBlock(7)}
          >
            <p className="inline">7. Есть ли у вас инструкции и документация?</p>
            <svg
              className={`lucide lucide-chevron-down w-10 transition-transform duration-300 ${openBlock === 7 ? "rotate-180" : ""}`}
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          {openBlock === 7 && (
            <p className="text-gray-400 word-break w-fit">
            Да. На docs.buytrx.org есть инструкции по использованию buytrx.org с
            каждым из поддерживаемых кошельков.
            </p>
          )}
        </div>
      </div>
      <div className="rounded-lg border border-gray-700">
      <div className="p-4 space-y-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleBlock(8)}
          >
            <p className="inline">8. Есть ли у вас реферальная программа?</p>
            <svg
              className={`lucide lucide-chevron-down w-10 transition-transform duration-300 ${openBlock === 8 ? "rotate-180" : ""}`}
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          {openBlock === 8 && (
            <p className="text-gray-400 word-break w-fit">
            Да. Вы можете получать 50% от ПОЖИЗНЕННОЙ выручки, генерируемой
            пользователями, которых вы пригласите. Создайте реферальную ссылку{" "}
            <a href="https://buytrx.org/referral/create" style={{ textDecoration:'underline'}} target="_blank">
              здесь
            </a>
            . Отслеживайте свой заработок{" "}
            <a href="https://buytrx.org/referral/manage" style={{ textDecoration:'underline'}}  target="_blank">
              здесь
            </a>
            .
            </p>
          )}
        </div>
      </div>
      <div className="rounded-lg border border-gray-700">
      <div className="p-4 space-y-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleBlock(9)}
          >
            <p className="inline">9. Есть ли у вас реферальная программа?</p>
            <svg
              className={`lucide lucide-chevron-down w-10 transition-transform duration-300 ${openBlock === 9 ? "rotate-180" : ""}`}
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          {openBlock === 9 && (
            <p className="text-gray-400 word-break w-fit">
             Вы можете связаться с создателем buytrx.org в X (Твиттер) или
             Телеграме по юзернейму @nebolax0.
            </p>
          )}
        </div>
      </div>
    </div>
    
    <div className="pt-8">
      <p className="text-center text-gray-400">
        <a className="underline" href="https://nebolax.xyz" target="_blank">
          Alexey Nebolsin
        </a>{" "}
        &{" "}
        <a className="underline" href="https://t.me/ssm_ax" target="_blank">
          Max Shakh
        </a>{" "}
        productions.
      </p>
    </div>
    <p className="text-gray-400 text-sm mt-4">Language: ru</p>
  </div>
</div>
    </>
  );
}
