import React, { useLayoutEffect } from "react";
import "./style.css";
import Store from "../../zustand/zustan";
import { Flex } from "@chakra-ui/react";

const Loader = () => {
  const { counter } = Store();

  useLayoutEffect(() => {
    if (counter > 0) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [counter]);

  if (counter > 0) {
    return (
      <>
        <Flex
          h={"100vh"}
          w={"100vw"}
          alignItems={"center"}
          justifyContent={"center"}
          className=" body"
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="100.000000pt"
            height="100.000000pt"
            viewBox="0 0 500.000000 500.000000"
            preserveAspectRatio="xMidYMid meet"
            className="!object-cover !flex !justify-center !items-center !w-full !h-full"
          >
            <path
              className="path"
              d="M0 0 C10.67419698 -0.02312328 21.34838806 -0.04091501 32.02260494 -0.05181217 C36.97853922 -0.05704103 41.93445642 -0.06413874 46.89038086 -0.07543945 C51.66898836 -0.08626822 56.44757938 -0.09227681 61.2261982 -0.09487724 C63.05353619 -0.09673151 64.88087324 -0.10035216 66.70820427 -0.10573006 C69.25853329 -0.11294036 71.80879337 -0.11399095 74.35913086 -0.11352539 C75.50387878 -0.1189183 75.50387878 -0.1189183 76.67175293 -0.12442017 C81.88594784 -0.11405216 81.88594784 -0.11405216 83 1 C84.65871409 1.26234668 86.32650846 1.46776324 87.99609375 1.6484375 C89.54780273 1.82632813 89.54780273 1.82632813 91.13085938 2.0078125 C93.2997049 2.248653 95.46896877 2.48576175 97.63867188 2.71875 C103.57761522 3.40668675 109.0505197 4.45136996 114.73754883 6.29541016 C118.00203455 7.31206126 121.25951172 7.89464451 124.625 8.5 C130.08646934 9.55281337 134.87480093 10.87922797 140 13 C141.41246659 13.49140948 142.82947683 13.96989006 144.25 14.4375 C144.98605469 14.67984375 145.72210938 14.9221875 146.48046875 15.171875 C147.31191406 15.44515625 148.14335937 15.7184375 149 16 C151.18776376 16.72837491 153.37525716 17.45756232 155.5625 18.1875 C156.59503906 18.53167969 157.62757813 18.87585938 158.69140625 19.23046875 C159.83416016 19.61138672 159.83416016 19.61138672 161 20 C161 20.66 161 21.32 161 22 C162.155 22.165 163.31 22.33 164.5 22.5 C170.87179345 23.88561223 176.39875366 27.03320465 182.1328125 30.02734375 C185.6858264 31.87738607 189.29976644 33.46704609 193 35 C193 35.66 193 36.32 193 37 C193.94875 37.309375 194.8975 37.61875 195.875 37.9375 C199 39 199 39 201 40 C201 40.66 201 41.32 201 42 C201.94875 42.309375 202.8975 42.61875 203.875 42.9375 C207 44 207 44 209 45 C209 45.66 209 46.32 209 47 C209.969375 47.268125 210.93875 47.53625 211.9375 47.8125 C212.948125 48.204375 213.95875 48.59625 215 49 C215.33 49.99 215.66 50.98 216 52 C216.721875 52.28875 217.44375 52.5775 218.1875 52.875 C221.7228047 54.28912188 224.1859843 56.51623553 227 59 C227.83724609 59.68255859 227.83724609 59.68255859 228.69140625 60.37890625 C232.62357594 63.60733193 235.88371947 67.09897689 239.1640625 70.98046875 C241.65482228 73.72030451 244.42645273 76.03280653 247.30078125 78.359375 C249.12887736 80.12443331 249.93225509 81.71659748 251 84 C251.70125 84.70125 252.4025 85.4025 253.125 86.125 C255 88 255 88 255 90 C255.66 90 256.32 90 257 90 C258.26171875 91.58203125 258.26171875 91.58203125 259.6875 93.8125 C260.20957031 94.62589844 260.73164063 95.43929687 261.26953125 96.27734375 C261.84058594 97.17582031 262.41164063 98.07429688 263 99 C263.64324219 99.97066406 264.28648437 100.94132812 264.94921875 101.94140625 C265.90248047 103.39353516 265.90248047 103.39353516 266.875 104.875 C267.47054688 105.77992187 268.06609375 106.68484375 268.6796875 107.6171875 C270 110 270 110 270 113 C270.66 113 271.32 113 272 113 C285 139.93548387 285 139.93548387 285 147 C285.66 147 286.32 147 287 147 C287.26554687 148.16917969 287.53109375 149.33835938 287.8046875 150.54296875 C288.16124851 152.09119417 288.51803102 153.63936859 288.875 155.1875 C289.04902344 155.95642578 289.22304688 156.72535156 289.40234375 157.51757812 C289.57636719 158.26845703 289.75039063 159.01933594 289.9296875 159.79296875 C290.08679199 160.4789917 290.24389648 161.16501465 290.40576172 161.87182617 C290.97780323 164.08554062 290.97780323 164.08554062 292.01586914 166.44970703 C293.00972358 169.02519785 293.4628437 171.28031062 293.81640625 174.01171875 C293.94080078 174.93404297 294.06519531 175.85636719 294.19335938 176.80664062 C294.37608398 178.23266602 294.37608398 178.23266602 294.5625 179.6875 C294.8106777 181.58765027 295.06183287 183.48741477 295.31640625 185.38671875 C295.47798218 186.64295044 295.47798218 186.64295044 295.64282227 187.92456055 C295.90623948 190.05334227 295.90623948 190.05334227 297 192 C297.09655001 193.99626024 297.12796427 195.99579156 297.12939453 197.99438477 C297.13412277 199.88127769 297.13412277 199.88127769 297.13894653 201.80628967 C297.13715689 203.18466222 297.13510597 204.56303445 297.1328125 205.94140625 C297.1334858 207.3486279 297.13445604 208.75584943 297.13571167 210.16307068 C297.13718695 213.11287544 297.1350392 216.06264993 297.13037109 219.01245117 C297.12466866 222.80130955 297.12795711 226.59009718 297.13394356 230.37895298 C297.13754928 233.28448525 297.13641063 236.19000061 297.13381577 239.09553337 C297.1331468 240.49304144 297.13397387 241.89055103 297.13629532 243.28805733 C297.13882255 245.23704119 297.13429062 247.18603041 297.12939453 249.13500977 C297.12820114 250.80141258 297.12820114 250.80141258 297.12698364 252.5014801 C297 255 297 255 296 256 C295.65458402 257.85029515 295.36420979 259.7109277 295.09765625 261.57421875 C294.84532227 263.28834961 294.84532227 263.28834961 294.58789062 265.03710938 C294.24046348 267.45101769 293.8940916 269.86507814 293.54882812 272.27929688 C293.37931641 273.42849609 293.20980469 274.57769531 293.03515625 275.76171875 C292.8844165 276.81319092 292.73367676 277.86466309 292.57836914 278.94799805 C291.98156724 282.09726802 291.06657062 284.98087855 290 288 C289.50787226 289.78815 289.02839988 291.57983777 288.5625 293.375 C286.24990525 301.90412422 282.82192692 309.83263084 279.3046875 317.92578125 C277.97011201 320.95712279 277.97011201 320.95712279 277 324 C276.34 324 275.68 324 275 324 C274.90976562 324.68707031 274.81953125 325.37414062 274.7265625 326.08203125 C273.83885847 329.64716516 272.2238113 332.55201598 270.375 335.6875 C270.01889648 336.30036865 269.66279297 336.9132373 269.29589844 337.54467773 C265.04717908 344.76128024 260.26196238 351.48943638 255 358 C254.27941406 358.8971875 253.55882812 359.794375 252.81640625 360.71875 C252.07261719 361.6365625 251.32882812 362.554375 250.5625 363.5 C249.82128906 364.4178125 249.08007812 365.335625 248.31640625 366.28125 C245.99805908 369.00227805 243.55820045 371.50501702 241 374 C240.175 374.825 239.35 375.65 238.5 376.5 C237.675 377.325 236.85 378.15 236 379 C234.8553125 380.175625 234.8553125 380.175625 233.6875 381.375 C223.83333333 391 223.83333333 391 221 391 C221 391.66 221 392.32 221 393 C219.19921875 394.48046875 219.19921875 394.48046875 216.6875 396.1875 C215.78 396.80496094 214.8725 397.42242187 213.9375 398.05859375 C195.66259447 410.13655658 195.66259447 410.13655658 191 411 C191 411.66 191 412.32 191 413 C188.2336466 414.34277732 185.46123789 415.67255228 182.6875 417 C181.90181641 417.3815625 181.11613281 417.763125 180.30664062 418.15625 C179.54931641 418.5171875 178.79199219 418.878125 178.01171875 419.25 C176.96697388 419.75273438 176.96697388 419.75273438 175.90112305 420.265625 C174 421 174 421 171 421 C171 421.66 171 422.32 171 423 C169.56445975 423.50559908 168.1264798 424.0042749 166.6875 424.5 C165.88699219 424.7784375 165.08648437 425.056875 164.26171875 425.34375 C162 426 162 426 159 426 C159 426.66 159 427.32 159 428 C157.4188708 428.50692692 155.83498617 429.00526443 154.25 429.5 C152.92742187 429.91765625 152.92742187 429.91765625 151.578125 430.34375 C149 431 149 431 145 431 C145 431.66 145 432.32 145 433 C143.10614563 433.50744423 141.20981334 434.00564574 139.3125 434.5 C138.25675781 434.7784375 137.20101563 435.056875 136.11328125 435.34375 C133.28857328 435.9391715 130.87163292 436.12786492 128 436 C128 436.66 128 437.32 128 438 C125.43850372 438.50567729 122.87600535 439.00470132 120.3125 439.5 C119.59126953 439.64308594 118.87003906 439.78617187 118.12695312 439.93359375 C114.36158641 440.65571887 110.85526187 441.1824976 107 441 C107 441.66 107 442.32 107 443 C81.0298471 446.58165209 81.0298471 446.58165209 70 446 C70 446.66 70 447.32 70 448 C50.53 448 31.06 448 11 448 C11 447.34 11 446.68 11 446 C10.30519531 446.02320313 9.61039063 446.04640625 8.89453125 446.0703125 C3.60172749 446.1642279 -1.51398941 446.10724743 -6.765625 445.44921875 C-20.96047276 443.67673464 -34.66117225 444.00657548 -48.5078125 448.015625 C-53.79690538 449.50651024 -59.18048422 450.11705084 -64.6171875 450.85546875 C-68.34810539 451.38278693 -71.86981115 451.96280319 -75.5 453 C-80.78917916 454.51119404 -86.17531701 455.11634903 -91.6171875 455.85546875 C-96.5696981 456.55544365 -101.19483344 457.56989091 -106 459 C-112.64801682 460.28211753 -119.22187717 461.31526153 -126 461 C-126 461.66 -126 462.32 -126 463 C-130.33747314 463.12528251 -134.67393858 463.21511224 -139.01269531 463.2746582 C-140.4829344 463.29952584 -141.95305358 463.33343362 -143.42285156 463.37719727 C-157.65022507 463.78965523 -169.87041424 460.3553395 -180.625 450.625 C-181.40875 449.75875 -182.1925 448.8925 -183 448 C-183.54011719 447.40574219 -184.08023438 446.81148438 -184.63671875 446.19921875 C-189 441.28671329 -189 441.28671329 -189 439 C-189.66 439 -190.32 439 -191 439 C-194.82843865 433.00766124 -196.91324577 427.35296136 -198.421875 420.40625 C-198.76341359 418.06246886 -198.76341359 418.06246886 -200 417 C-200.25288599 413.79961091 -200.18523682 410.58418658 -200.1875 407.375 C-200.19974609 406.48425781 -200.21199219 405.59351563 -200.22460938 404.67578125 C-200.23632674 399.37172132 -199.58685923 395.09857297 -198 390 C-197.40323148 386.68023279 -196.95390819 383.34196142 -196.5 380 C-195.70585738 374.15301587 -194.67445378 368.67304942 -193 363 C-192.57909465 360.69541328 -192.2037518 358.38202657 -191.875 356.0625 C-191.70742187 354.91910156 -191.53984375 353.77570313 -191.3671875 352.59765625 C-190.66645439 345.73196269 -191.06792908 339.30159862 -192 332.5 C-192.09539062 331.77296875 -192.19078125 331.0459375 -192.2890625 330.296875 C-192.52146167 328.53064133 -192.76006638 326.76522594 -193 325 C-193.66 325 -194.32 325 -195 325 C-195.36351562 323.98292969 -195.36351562 323.98292969 -195.734375 322.9453125 C-197.76990705 317.29279658 -199.89984515 311.71459228 -202.265625 306.19140625 C-203 304 -203 304 -203 300 C-203.66 300 -204.32 300 -205 300 C-205.26554688 298.83082031 -205.53109375 297.66164063 -205.8046875 296.45703125 C-206.16124851 294.90880583 -206.51803102 293.36063141 -206.875 291.8125 C-207.13603516 290.65911133 -207.13603516 290.65911133 -207.40234375 289.48242188 C-207.57636719 288.73154297 -207.75039062 287.98066406 -207.9296875 287.20703125 C-208.08679199 286.5210083 -208.24389648 285.83498535 -208.40576172 285.12817383 C-208.97780323 282.91445938 -208.97780323 282.91445938 -210.01586914 280.55029297 C-211.00972358 277.97480215 -211.4628437 275.71968938 -211.81640625 272.98828125 C-211.94080078 272.06595703 -212.06519531 271.14363281 -212.19335938 270.19335938 C-212.37608398 268.76733398 -212.37608398 268.76733398 -212.5625 267.3125 C-212.8106777 265.41234973 -213.06183287 263.51258523 -213.31640625 261.61328125 C-213.42412354 260.77579346 -213.53184082 259.93830566 -213.64282227 259.07543945 C-213.90623948 256.94665773 -213.90623948 256.94665773 -215 255 C-215.10158536 253.04622931 -215.13840694 251.0889662 -215.14526367 249.13256836 C-215.15164352 247.90046127 -215.15802338 246.66835419 -215.16459656 245.39891052 C-215.16612619 244.04588866 -215.16723964 242.69286628 -215.16796875 241.33984375 C-215.17118299 239.95178696 -215.17454719 238.56373052 -215.17805481 237.17567444 C-215.18405095 234.25944231 -215.18589447 231.34323982 -215.18530273 228.42700195 C-215.18520166 224.71062099 -215.19879477 220.99443345 -215.21607494 217.27809811 C-215.2272643 214.40655161 -215.22921974 211.53505063 -215.22869301 208.66348457 C-215.22986497 207.29491071 -215.23424222 205.92633536 -215.24202538 204.55778313 C-215.28061035 197.06534783 -214.97760533 190.23446492 -213 183 C-212.72041336 181.46821905 -212.45459673 179.93365369 -212.21875 178.39453125 C-212.09886719 177.63849609 -211.97898438 176.88246094 -211.85546875 176.10351562 C-211.61671391 174.56472758 -211.37976066 173.02565903 -211.14453125 171.48632812 C-210.45118284 167.13612601 -209.47470825 163.16690818 -208 159 C-207.4378483 156.88032709 -206.89572265 154.75522903 -206.375 152.625 C-206.11460937 151.56539062 -205.85421875 150.50578125 -205.5859375 149.4140625 C-205.39257812 148.61742187 -205.19921875 147.82078125 -205 147 C-204.34 147 -203.68 147 -203 147 C-202.85304687 145.26363281 -202.85304687 145.26363281 -202.703125 143.4921875 C-202.13319773 138.9626606 -200.66621671 135.23933401 -198.75 131.125 C-198.43861084 130.43535156 -198.12722168 129.74570313 -197.80639648 129.03515625 C-195.3432087 123.6218347 -192.75075429 118.27333542 -190 113 C-189.34 113 -188.68 113 -188 113 C-187.9175 112.278125 -187.835 111.55625 -187.75 110.8125 C-186.84092732 107.40347744 -185.272193 105.67316824 -183 103 C-181.97388051 101.34928604 -180.97691857 99.68029994 -180 98 C-179.15478755 96.55721697 -178.30002624 95.11999972 -177.4375 93.6875 C-177.02371094 92.99011719 -176.60992187 92.29273437 -176.18359375 91.57421875 C-175.79300781 91.05472656 -175.40242188 90.53523438 -175 90 C-174.34 90 -173.68 90 -173 90 C-172.731875 89.236875 -172.46375 88.47375 -172.1875 87.6875 C-171.00309315 85.00700028 -170.06008361 83.98580175 -168 82 C-166.93123012 80.7553566 -165.86915999 79.5049406 -164.8125 78.25 C-161.75676476 74.72365575 -158.4744878 71.734148 -154.9140625 68.73046875 C-153.01650084 67.01491811 -151.43002762 65.2283607 -149.8125 63.25 C-147.48933603 60.42180039 -145.24415692 58.75359834 -142 57 C-141.505 56.484375 -141.01 55.96875 -140.5 55.4375 C-139 54 -139 54 -136.375 53 C-135.199375 52.505 -135.199375 52.505 -134 52 C-133.67 51.01 -133.34 50.02 -133 49 C-129.9375 47.8125 -129.9375 47.8125 -127 47 C-127 46.34 -127 45.68 -127 45 C-121.25 42 -121.25 42 -119 42 C-119 41.34 -119 40.68 -119 40 C-113.25 37 -113.25 37 -111 37 C-111 36.34 -111 35.68 -111 35 C-107.9802079 33.56030542 -104.95897965 32.12364913 -101.9375 30.6875 C-101.08994141 30.28337891 -100.24238281 29.87925781 -99.36914062 29.46289062 C-85.26284435 22.76376151 -85.26284435 22.76376151 -79 22 C-79 21.34 -79 20.68 -79 20 C-77.1875 19.39583333 -75.375 18.79166667 -73.5625 18.1875 C-72.46164063 17.82011719 -71.36078125 17.45273437 -70.2265625 17.07421875 C-68.34742481 16.44859785 -66.46757007 15.82510797 -64.5859375 15.20703125 C-61.53989278 14.20460562 -58.51402012 13.20138545 -55.52734375 12.03125 C-48.94591208 9.47234284 -42.4102937 7.95231815 -35.48046875 6.7109375 C-32.0483431 6.08733232 -32.0483431 6.08733232 -29.03515625 4.984375 C-25.47418513 3.82946545 -21.95199304 3.30672189 -18.25 2.875 C-17.20199219 2.74762451 -17.20199219 2.74762451 -16.1328125 2.61767578 C-10.74318519 1.99990715 -5.42504106 1.76526265 0 2 C0 1.34 0 0.68 0 0 Z M16 50 C14.07233868 50.26386669 12.1365208 50.46853597 10.19921875 50.6484375 C8.99330078 50.76703125 7.78738281 50.885625 6.54492188 51.0078125 C4.0166245 51.24848081 1.48798514 51.48558911 -1.04101562 51.71875 C-8.9408858 52.50331186 -16.34978449 53.90665384 -24 56 C-26.22734959 56.50803328 -28.45612014 57.00997148 -30.6875 57.5 C-35.22598211 58.53566318 -39.59813291 59.76286091 -43.98828125 61.3046875 C-46.95871766 62.33136261 -49.97147787 63.16232367 -53 64 C-53 64.66 -53 65.32 -53 66 C-53.92232422 66.19916016 -53.92232422 66.19916016 -54.86328125 66.40234375 C-56.07564453 66.66724609 -56.07564453 66.66724609 -57.3125 66.9375 C-58.11300781 67.11152344 -58.91351563 67.28554687 -59.73828125 67.46484375 C-62.145401 67.99886159 -62.145401 67.99886159 -65 69 C-65 69.66 -65 70.32 -65 71 C-66.0725 71.12375 -67.145 71.2475 -68.25 71.375 C-71.37863615 71.89643936 -73.33480424 72.40088254 -76 74 C-76 74.66 -76 75.32 -76 76 C-76.721875 76.12375 -77.44375 76.2475 -78.1875 76.375 C-80.95721894 76.9904931 -83.3970354 77.88444374 -86 79 C-86 79.66 -86 80.32 -86 81 C-86.804375 81.20625 -87.60875 81.4125 -88.4375 81.625 C-93.05469793 83.40707639 -97.16242583 85.86171712 -101 89 C-101 89.66 -101 90.32 -101 91 C-101.78375 91.309375 -102.5675 91.61875 -103.375 91.9375 C-105.92330128 92.92875038 -105.92330128 92.92875038 -108 94 C-108 94.66 -108 95.32 -108 96 C-108.58265625 96.268125 -109.1653125 96.53625 -109.765625 96.8125 C-112.02786601 98.01480991 -113.80576318 99.33825913 -115.75 101 C-116.36359375 101.515625 -116.9771875 102.03125 -117.609375 102.5625 C-119.23176376 103.90623252 -119.23176376 103.90623252 -119 106 C-119.59296875 106.2578125 -120.1859375 106.515625 -120.796875 106.78125 C-123.17660965 108.09769895 -124.50978792 109.42580782 -126.25 111.5 C-126.77078125 112.1084375 -127.2915625 112.716875 -127.828125 113.34375 C-129.19252997 114.93395821 -129.19252997 114.93395821 -129 117 C-129.9590625 117.4021875 -129.9590625 117.4021875 -130.9375 117.8125 C-133.33131686 118.88667752 -133.33131686 118.88667752 -134 122 C-135.485 122.99 -135.485 122.99 -137 124 C-138.03379779 125.71222758 -139.06300379 127.4288147 -140.015625 129.1875 C-140.8703708 130.76131766 -141.80383914 132.29188433 -142.75 133.8125 C-144.16537965 135.86950512 -144.16537965 135.86950512 -144 138 C-144.66 138 -145.32 138 -146 138 C-148.29045014 142.81209901 -148.29045014 142.81209901 -149 148 C-149.66 148 -150.32 148 -151 148 C-151.50559908 149.43554025 -152.0042749 150.8735202 -152.5 152.3125 C-152.7784375 153.11300781 -153.056875 153.91351563 -153.34375 154.73828125 C-154.13933107 157.08769422 -154.13933107 157.08769422 -154 160 C-154.66 160 -155.32 160 -156 160 C-156.26554687 161.15757812 -156.53109375 162.31515625 -156.8046875 163.5078125 C-157.16130764 165.04690993 -157.51808691 166.58597048 -157.875 168.125 C-158.04902344 168.88554687 -158.22304687 169.64609375 -158.40234375 170.4296875 C-159.16939235 173.72515556 -159.97000276 176.91231576 -161.06640625 180.1171875 C-164.03627227 189.28773612 -164.22308403 199.68223201 -164.75390625 209.26953125 C-165 212 -165 212 -166 214 C-166.09572552 215.58236087 -166.13074047 217.1686539 -166.1328125 218.75390625 C-166.13410156 219.69041016 -166.13539063 220.62691406 -166.13671875 221.59179688 C-166.13285156 222.57212891 -166.12898438 223.55246094 -166.125 224.5625 C-166.12886719 225.54669922 -166.13273437 226.53089844 -166.13671875 227.54492188 C-166.13542969 228.48013672 -166.13414062 229.41535156 -166.1328125 230.37890625 C-166.13168457 231.2407251 -166.13055664 232.10254395 -166.12939453 232.99047852 C-166.22216915 234.99790032 -166.22216915 234.99790032 -165 236 C-164.79647185 237.50202653 -164.65267412 239.01224693 -164.53515625 240.5234375 C-164.45845703 241.45736328 -164.38175781 242.39128906 -164.30273438 243.35351562 C-164.22345703 244.35060547 -164.14417969 245.34769531 -164.0625 246.375 C-163.22393326 256.20451539 -162.31086973 265.65166195 -159 275 C-158.53509496 276.74826564 -158.07755331 278.49849638 -157.625 280.25 C-156.36326692 284.96218682 -154.75054053 289.40956213 -152.8671875 293.90625 C-152.17519329 295.57701078 -151.57186516 297.28440453 -151 299 C-150.34 299 -149.68 299 -149 299 C-148.89042969 299.556875 -148.78085938 300.11375 -148.66796875 300.6875 C-148.50941406 301.450625 -148.35085937 302.21375 -148.1875 303 C-148.03667969 303.7425 -147.88585937 304.485 -147.73046875 305.25 C-147.0031294 308.20297668 -147.0031294 308.20297668 -145.53125 311.71875 C-143.79910325 316.22900791 -143.02235507 320.73660098 -142.3125 325.5 C-142.18294922 326.32242187 -142.05339844 327.14484375 -141.91992188 327.9921875 C-141.60574306 329.99362288 -141.30178543 331.99665842 -141 334 C-140.34 334 -139.68 334 -139 334 C-139.13818532 337.47951523 -139.28682601 340.95850495 -139.4375 344.4375 C-139.47681641 345.43072266 -139.51613281 346.42394531 -139.55664062 347.44726562 C-139.59853516 348.39150391 -139.64042969 349.33574219 -139.68359375 350.30859375 C-139.72025146 351.18314209 -139.75690918 352.05769043 -139.79467773 352.95874023 C-140 355 -140 355 -141 356 C-141.34594735 357.91164597 -141.63609825 359.83344683 -141.90234375 361.7578125 C-142.07056641 362.94117188 -142.23878906 364.12453125 -142.41210938 365.34375 C-142.75910094 367.84105735 -143.10546726 370.33845167 -143.45117188 372.8359375 C-144.29017259 378.73127333 -145.23939473 384.31638632 -147 390 C-148.28211753 396.64801682 -149.31526153 403.22187717 -149 410 C-147.68 410.66 -146.36 411.32 -145 412 C-145 412.66 -145 413.32 -145 414 C-143.02 414 -141.04 414 -139 414 C-139 413.34 -139 412.68 -139 412 C-138.21238281 411.95101563 -137.42476562 411.90203125 -136.61328125 411.8515625 C-128.65861404 411.30556167 -120.861224 410.32521452 -113 409 C-113 408.34 -113 407.68 -113 407 C-111.88625 407.0309375 -110.7725 407.061875 -109.625 407.09375 C-104.65361212 407.09375 -99.89026894 406.33382466 -95 405.5 C-94.12988281 405.35691406 -93.25976562 405.21382813 -92.36328125 405.06640625 C-90.24124305 404.71661973 -88.12047972 404.3591135 -86 404 C-86 403.34 -86 402.68 -86 402 C-85.14019531 401.95101563 -84.28039062 401.90203125 -83.39453125 401.8515625 C-75.16951815 401.33133266 -67.12254936 400.38973851 -59 399 C-59 398.34 -59 397.68 -59 397 C-58.16339844 396.95101563 -57.32679688 396.90203125 -56.46484375 396.8515625 C-47.56655276 396.28002221 -38.82343193 395.27284802 -30 394 C-30 393.34 -30 392.68 -30 392 C-25.05 392 -20.1 392 -15 392 C-15 392.66 -15 393.32 -15 394 C20.34335614 398.37765518 56.70411813 399.22379052 92 394 C92 393.34 92 392.68 92 392 C93.010625 392.061875 94.02125 392.12375 95.0625 392.1875 C101.80544776 392.22408019 108.44330348 390.43427736 115 389 C115 388.34 115 387.68 115 387 C116.26714844 386.90847656 117.53429687 386.81695312 118.83984375 386.72265625 C124.39486379 386.1054318 129.3439985 384.37098735 134.5625 382.4375 C135.47580078 382.10814453 136.38910156 381.77878906 137.33007812 381.43945312 C139.55674182 380.63505629 141.77972744 379.82183701 144 379 C144 378.34 144 377.68 144 377 C145.00160156 376.90847656 146.00320313 376.81695312 147.03515625 376.72265625 C151.2940457 376.11424347 154.67441119 374.4484628 158.4375 372.4375 C159.07365234 372.10814453 159.70980469 371.77878906 160.36523438 371.43945312 C161.91494576 370.63546752 163.45818322 369.81902334 165 369 C165 368.34 165 367.68 165 367 C165.7425 366.87625 166.485 366.7525 167.25 366.625 C169.80141485 366.04513299 171.7267573 365.26291261 174 364 C174 363.34 174 362.68 174 362 C174.72574219 361.731875 175.45148438 361.46375 176.19921875 361.1875 C178.96864024 360.01329619 181.30919434 358.6605676 183.8125 357 C184.60269531 356.484375 185.39289063 355.96875 186.20703125 355.4375 C186.79871094 354.963125 187.39039063 354.48875 188 354 C188 353.34 188 352.68 188 352 C189.0209375 351.690625 189.0209375 351.690625 190.0625 351.375 C196.1250724 348.53720015 200.44276659 343.70841618 204.64453125 338.60546875 C206 337 206 337 208.375 334.6875 C210.2312139 333.15034461 210.2312139 333.15034461 210 331 C210.61875 330.7525 211.2375 330.505 211.875 330.25 C214.4072196 328.76045906 214.80718658 327.62418952 216 325 C216.43828125 324.5771875 216.8765625 324.154375 217.328125 323.71875 C219.49121362 321.49501403 221.02533228 319.05445589 222.6875 316.4375 C223.31011719 315.46683594 223.93273437 314.49617188 224.57421875 313.49609375 C226.16533086 311.18965807 226.16533086 311.18965807 226 309 C226.66 309 227.32 309 228 309 C229.485 304.05 229.485 304.05 231 299 C231.66 299 232.32 299 233 299 C233.25394531 298.2265625 233.50789063 297.453125 233.76953125 296.65625 C236.91316487 287.14293177 236.91316487 287.14293177 238.6875 282.8125 C240.30388986 278.63975443 240.70194509 274.43999033 241 270 C241.66 270 242.32 270 243 270 C245.42486934 254.72889298 245.42486934 254.72889298 246.7890625 239.3359375 C247 237 247 237 248 235 C248.09572552 233.41763913 248.13074047 231.8313461 248.1328125 230.24609375 C248.13474609 228.84133789 248.13474609 228.84133789 248.13671875 227.40820312 C248.13285156 226.42787109 248.12898438 225.44753906 248.125 224.4375 C248.12886719 223.45330078 248.13273437 222.46910156 248.13671875 221.45507812 C248.13542969 220.51986328 248.13414062 219.58464844 248.1328125 218.62109375 C248.13168457 217.7592749 248.13055664 216.89745605 248.12939453 216.00952148 C248.22216915 214.00209968 248.22216915 214.00209968 247 213 C246.79555705 211.26684287 246.65229018 209.52639437 246.53515625 207.78515625 C246.41817383 206.16577148 246.41817383 206.16577148 246.29882812 204.51367188 C246.14369042 202.24814854 245.98999735 199.98252573 245.83789062 197.71679688 C245.18771711 188.76766063 243.88971382 180.49915831 241 172 C239.9563775 168.01058592 238.9726344 164.00725375 238 160 C237.34 160 236.68 160 236 160 C235.86722656 159.38511719 235.73445313 158.77023438 235.59765625 158.13671875 C235.42105469 157.32847656 235.24445313 156.52023438 235.0625 155.6875 C234.88847656 154.88699219 234.71445312 154.08648437 234.53515625 153.26171875 C234.00113841 150.854599 234.00113841 150.854599 233 148 C232.34 148 231.68 148 231 148 C230.87625 147.278125 230.7525 146.55625 230.625 145.8125 C230.0039987 143.01799416 229.22183229 140.58740955 228 138 C227.34 137.67 226.68 137.34 226 137 C224.98063057 135.00980253 223.98537521 133.0072458 223 131 C222.16470599 129.55145216 221.30984546 128.11404139 220.4375 126.6875 C220.02371094 126.01074219 219.60992187 125.33398438 219.18359375 124.63671875 C218.08271595 122.84856056 218.08271595 122.84856056 216 122 C215.505 121.154375 215.01 120.30875 214.5 119.4375 C214.005 118.633125 213.51 117.82875 213 117 C212.34 117 211.68 117 211 117 C210.773125 116.278125 210.54625 115.55625 210.3125 114.8125 C208.73080282 111.42314891 206.79885498 109.4575312 204 107 C203.01 106.67 202.02 106.34 201 106 C200.3289 104.66889256 199.66273645 103.33529121 199 102 C197.20453178 100.38944858 197.20453178 100.38944858 195.125 99 C192.75645761 97.31123783 190.78825938 95.7823777 188.75 93.6875 C186.7943766 91.8017203 185.57038768 91.62043841 183 91 C182.67 90.01 182.34 89.02 182 88 C179.68304729 86.57418295 177.39399178 85.27544594 175 84 C174.071875 83.4225 173.14375 82.845 172.1875 82.25 C170.13049488 80.83462035 170.13049488 80.83462035 168 81 C168 80.34 168 79.68 168 79 C163.18790099 76.70954986 163.18790099 76.70954986 158 76 C158 75.34 158 74.68 158 74 C156.9275 73.505 155.855 73.01 154.75 72.5 C154.14671875 72.2215625 153.5434375 71.943125 152.921875 71.65625 C150.70757164 70.78457076 150.70757164 70.78457076 147 71 C147 70.34 147 69.68 147 69 C145.56445975 68.49440092 144.1264798 67.9957251 142.6875 67.5 C141.88699219 67.2215625 141.08648437 66.943125 140.26171875 66.65625 C137.91230578 65.86066893 137.91230578 65.86066893 135 66 C135 65.34 135 64.68 135 64 C133.53240234 63.61908203 133.53240234 63.61908203 132.03515625 63.23046875 C120.11281447 60.10863957 120.11281447 60.10863957 115.1875 58.375 C111.36339508 57.04268473 107.53925526 56.23168654 103.5546875 55.52734375 C101 55 101 55 97.77734375 54.01806641 C94.13278427 53.0357879 90.76056585 52.5321411 87.0078125 52.18359375 C85.72648438 52.05919922 84.44515625 51.93480469 83.125 51.80664062 C81.79171816 51.68303702 80.458384 51.55999656 79.125 51.4375 C76.48120033 51.19149905 73.83823774 50.93905869 71.1953125 50.68359375 C70.03016113 50.57587646 68.86500977 50.46815918 67.66455078 50.35717773 C65 50 65 50 64 49 C62.53194708 48.90177256 61.0592254 48.8720163 59.58789062 48.87060547 C58.18138245 48.86587723 58.18138245 48.86587723 56.74645996 48.86105347 C55.72669067 48.8630777 54.70692139 48.86510193 53.65625 48.8671875 C52.61682251 48.86623077 51.57739502 48.86527405 50.50646973 48.86428833 C48.30395446 48.86360637 46.10143721 48.86546173 43.89892578 48.86962891 C40.51460281 48.87497692 37.13041256 48.86968441 33.74609375 48.86328125 C31.61197887 48.86394203 29.47786408 48.86522319 27.34375 48.8671875 C26.32398071 48.86516327 25.30421143 48.86313904 24.25354004 48.86105347 C23.31586792 48.86420563 22.3781958 48.86735779 21.41210938 48.87060547 C20.16753967 48.87179886 20.16753967 48.87179886 18.89782715 48.87301636 C16.98898476 48.79157448 16.98898476 48.79157448 16 50 Z "
              fill="#ffffff"
              transform="translate(215,0)"
            />
            <path
              className="path"
              d="M0 0 C1.4540625 0.5878125 1.4540625 0.5878125 2.9375 1.1875 C7.85085848 4.09540604 13.2205098 8.05711188 14.73046875 13.7578125 C14.81941406 14.49773437 14.90835938 15.23765625 15 16 C15.66 16 16.32 16 17 16 C20.50475638 25.19998549 19.96956444 35.72011114 17 45 C16.34 45 15.68 45 15 45 C14.731875 45.969375 14.46375 46.93875 14.1875 47.9375 C13.5996875 49.4534375 13.5996875 49.4534375 13 51 C12.01 51.33 11.02 51.66 10 52 C9.71125 52.598125 9.4225 53.19625 9.125 53.8125 C7.09046186 57.76854638 3.97455124 59.60222399 -0.0625 61.25 C-3 62 -3 62 -7 62 C-7 62.66 -7 63.32 -7 64 C-11.62 64 -16.24 64 -21 64 C-21 63.34 -21 62.68 -21 62 C-22.5778125 61.814375 -22.5778125 61.814375 -24.1875 61.625 C-30.51703276 60.58737168 -33.7261234 58.8844304 -38 54 C-38 53.34 -38 52.68 -38 52 C-38.639375 51.773125 -39.27875 51.54625 -39.9375 51.3125 C-42 50 -42 50 -42.75 47.375 C-42.8325 46.59125 -42.915 45.8075 -43 45 C-43.66 45 -44.32 45 -45 45 C-47.96956444 35.72011114 -48.50475638 25.19998549 -45 16 C-44.34 16 -43.68 16 -43 16 C-42.87818359 14.90365234 -42.87818359 14.90365234 -42.75390625 13.78515625 C-41.19728566 8.03453199 -35.65565852 3.70389279 -30.765625 0.56640625 C-21.33669475 -4.27212375 -9.40383725 -5.28965845 0 0 Z "
              fill="#ffffff"
              transform="translate(270,193)"
            />
            <path
              className="path"
              d="M0 0 C1.216875 -0.00257813 2.43375 -0.00515625 3.6875 -0.0078125 C6.34750011 0.09883845 8.48228971 0.33192126 11 1.125 C11 1.785 11 2.445 11 3.125 C11.721875 3.228125 12.44375 3.33125 13.1875 3.4375 C18.69430135 4.783607 22.297575 7.92224729 26 12.125 C27.3125 14.9375 27.3125 14.9375 28 17.125 C28.66 17.125 29.32 17.125 30 17.125 C33.50569006 26.62197185 34.62355992 38.4863306 31 48.125 C26.71408704 55.32742445 20.2144233 62.42288773 11.875 64.70703125 C9.9375 65 9.9375 65 7 65.125 C7 65.785 7 66.445 7 67.125 C2.38 67.125 -2.24 67.125 -7 67.125 C-7 66.465 -7 65.805 -7 65.125 C-8.5778125 64.939375 -8.5778125 64.939375 -10.1875 64.75 C-16.52748211 63.71065867 -19.71586689 62.0041516 -24 57.125 C-24.495 55.64 -24.495 55.64 -25 54.125 C-25.99 53.795 -26.98 53.465 -28 53.125 C-28.33 51.475 -28.66 49.825 -29 48.125 C-29.66 48.125 -30.32 48.125 -31 48.125 C-32.9644433 43.17084618 -33.3356785 38.9304775 -33.3125 33.6875 C-33.32861328 32.96240234 -33.34472656 32.23730469 -33.36132812 31.49023438 C-33.36854007 23.46333731 -30.02745316 16.35786591 -25 10.125 C-22.25 8.8125 -22.25 8.8125 -20 8.125 C-19.67 7.135 -19.34 6.145 -19 5.125 C-17.29296875 3.9921875 -17.29296875 3.9921875 -15.1875 3 C-14.50042969 2.66742188 -13.81335938 2.33484375 -13.10546875 1.9921875 C-8.66162089 0.16188281 -4.81592112 -0.01020322 0 0 Z "
              fill="#ffffff"
              transform="translate(352,189.875)"
            />
            <path
              className="path"
              d="M0 0 C1.7015625 0.8353125 1.7015625 0.8353125 3.4375 1.6875 C4.283125 2.120625 5.12875 2.55375 6 3 C6 3.66 6 4.32 6 5 C6.7425 5.20625 7.485 5.4125 8.25 5.625 C11.8424014 7.4212007 13.08309537 9.52117309 15 13 C15 13.99 15 14.98 15 16 C15.66 16 16.32 16 17 16 C18.98748346 20.98448234 19.30561339 25.2259968 19.25 30.5 C19.26160156 31.60021484 19.26160156 31.60021484 19.2734375 32.72265625 C19.25742962 37.1968584 18.68015168 40.78628625 17 45 C16.34 45 15.68 45 15 45 C14.34 46.98 13.68 48.96 13 51 C12.34 51 11.68 51 11 51 C10.79375 51.556875 10.5875 52.11375 10.375 52.6875 C7.82576004 56.97485811 4.37512526 59.42244739 -0.125 61.3125 C-3 62 -3 62 -7 62 C-7 62.66 -7 63.32 -7 64 C-11.62 64 -16.24 64 -21 64 C-21 63.34 -21 62.68 -21 62 C-21.969375 61.95875 -22.93875 61.9175 -23.9375 61.875 C-32.31653595 60.60800868 -38.52226688 54.20915622 -43.3984375 47.69140625 C-48.35480041 39.36229882 -47.37627004 29.2676249 -46 20 C-45.38260323 17.98424563 -44.73005864 15.97774084 -44 14 C-43.34 14 -42.68 14 -42 14 C-41.773125 13.278125 -41.54625 12.55625 -41.3125 11.8125 C-38.94102009 6.73075733 -34.95982903 3.47991452 -30 1 C-27.1875 0.3125 -27.1875 0.3125 -25 0 C-25 -0.66 -25 -1.32 -25 -2 C-16.89286906 -4.49450183 -7.38757035 -4.15550832 0 0 Z "
              fill="#ffffff"
              transform="translate(174,193)"
            />
          </svg>
        </Flex>
      </>
    );
  } else {
    return <></>;
  }
};

export default Loader;
