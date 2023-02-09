export const Esp = ({
  fillColors,
  onFill,
}: {
  fillColors: any
  onFill: any
}) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="792.000000pt"
      height="1130.000000pt"
      viewBox="0 0 792.000000 1130.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,1130.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          id="0"
          name="circle"
          onClick={() => onFill(0)}
          fillRule="evenodd"
          fill={fillColors[0]}
          d="M1915 10665 c-184 -30 -405 -116 -568 -221 -337 -217 -586 -592 -659
-989 -20 -109 -17 -439 5 -548 121 -600 586 -1060 1194 -1184 132 -27 431 -24
570 5 454 97 830 386 1036 797 103 204 145 368 154 606 13 316 -60 593 -224
851 -219 346 -531 569 -933 665 -89 21 -135 26 -295 29 -134 2 -217 -1 -280
-11z"
        />
        <path
          name="circle-line"
          d="M1915 10665 c-184 -30 -405 -116 -568 -221 -337 -217 -586 -592 -659
-989 -20 -109 -17 -439 5 -548 121 -600 586 -1060 1194 -1184 132 -27 431 -24
570 5 454 97 830 386 1036 797 103 204 145 368 154 606 13 316 -60 593 -224
851 -219 346 -531 569 -933 665 -89 21 -135 26 -295 29 -134 2 -217 -1 -280
-11z m468 -250 c242 -42 472 -163 649 -342 195 -196 308 -412 354 -677 24
-138 15 -379 -20 -508 -96 -360 -332 -650 -661 -813 -199 -98 -358 -131 -599
-122 -199 7 -338 42 -508 128 -662 334 -886 1182 -474 1798 82 122 146 194
249 276 291 233 643 324 1010 260z"
        />
        <path
          id="3"
          name="square"
          onClick={() => onFill(3)}
          fillRule="evenodd"
          fill={fillColors[3]}
          d="M4300 9929 c-54 -25 -75 -42 -109 -94 l-26 -40 -3 -1263 -2 -1262 25
-49 c13 -28 40 -61 58 -75 78 -59 -5 -56 1338 -56 915 0 1242 3 1271 12 56 17
123 79 145 136 17 45 18 111 18 1292 l0 1245 -22 40 c-28 52 -68 89 -123 114
-44 20 -59 21 -1285 21 -1225 0 -1241 -1 -1285 -21z"
        />
        <path
          name="square-line"
          d="M4300 9929 c-54 -25 -75 -42 -109 -94 l-26 -40 -3 -1263 -2 -1262 25
-49 c13 -28 40 -61 58 -75 78 -59 -5 -56 1338 -56 915 0 1242 3 1271 12 56 17
123 79 145 136 17 45 18 111 18 1292 l0 1245 -22 40 c-28 52 -68 89 -123 114
-44 20 -59 21 -1285 21 -1225 0 -1241 -1 -1285 -21z
m2480 -1409 l0 -1190 -1195 0 -1195 0 0 1190 0 1190 1195 0 1195 0 0 -1190z"
        />
        <path
          id="4"
          name="star"
          onClick={() => onFill(4)}
          fillRule="evenodd"
          fill={fillColors[4]}
          d="M3512 7126 c-43 -14 -103 -54 -135 -91 -17 -20 -63 -111 -284 -564
-68 -140 -125 -256 -127 -258 -1 -2 -189 -30 -417 -63 -492 -71 -462 -66 -522
-98 -91 -49 -140 -135 -139 -245 0 -121 11 -135 371 -486 l319 -311 -9 -43
c-5 -23 -38 -215 -74 -427 -47 -272 -65 -403 -63 -445 8 -131 101 -234 229
-254 101 -16 97 -18 629 263 162 86 300 156 306 156 5 0 62 -27 125 -61 62
-33 179 -95 259 -136 80 -42 150 -79 155 -83 6 -4 70 -38 144 -75 l133 -67 82
4 c47 3 94 11 112 21 88 46 154 152 154 247 0 30 -16 145 -35 255 -19 110 -52
301 -72 423 l-38 224 323 316 c360 354 365 361 365 484 0 112 -55 198 -162
252 -21 12 -188 40 -470 82 -240 35 -438 64 -441 64 -3 0 -93 180 -200 400
-208 427 -226 457 -316 501 -56 26 -146 33 -202 15z"
        />
        <path
          name="star-line"
          d="M3512 7126 c-43 -14 -103 -54 -135 -91 -17 -20 -63 -111 -284 -564
-68 -140 -125 -256 -127 -258 -1 -2 -189 -30 -417 -63 -492 -71 -462 -66 -522
-98 -91 -49 -140 -135 -139 -245 0 -121 11 -135 371 -486 l319 -311 -9 -43
c-5 -23 -38 -215 -74 -427 -47 -272 -65 -403 -63 -445 8 -131 101 -234 229
-254 101 -16 97 -18 629 263 162 86 300 156 306 156 5 0 62 -27 125 -61 62
-33 179 -95 259 -136 80 -42 150 -79 155 -83 6 -4 70 -38 144 -75 l133 -67 82
4 c47 3 94 11 112 21 88 46 154 152 154 247 0 30 -16 145 -35 255 -19 110 -52
301 -72 423 l-38 224 323 316 c360 354 365 361 365 484 0 112 -55 198 -162
252 -21 12 -188 40 -470 82 -240 35 -438 64 -441 64 -3 0 -93 180 -200 400
-208 427 -226 457 -316 501 -56 26 -146 33 -202 15z m274 -662 c102 -208 200
-409 216 -445 29 -64 31 -67 71 -72 23 -4 244 -36 491 -72 247 -36 452 -65
455 -65 3 0 -155 -159 -352 -353 l-359 -352 85 -485 c47 -267 83 -487 80 -490
-2 -3 -34 11 -71 30 -609 320 -800 420 -809 420 -5 0 -63 -28 -129 -63 -65
-35 -173 -92 -239 -127 -66 -34 -204 -107 -306 -161 -103 -55 -192 -99 -198
-99 -7 0 -9 9 -6 23 2 12 18 99 34 192 16 94 53 303 81 465 l52 295 -353 347
c-194 191 -350 350 -347 353 4 4 224 38 490 77 266 38 484 70 484 71 1 1 100
203 219 450 120 246 220 446 221 444 2 -2 88 -174 190 -383z"
        />
        <path
          id="2"
          name="triangle"
          onClick={() => onFill(2)}
          fillRule="evenodd"
          fill={fillColors[2]}
          d="M5495 3991 c-96 -24 -137 -69 -270 -303 -60 -106 -128 -224 -150
-263 -23 -38 -284 -495 -581 -1014 l-539 -945 0 -80 c0 -93 16 -133 73 -192
19 -20 56 -46 81 -58 l46 -21 1400 0 c1132 0 1407 3 1437 13 56 20 134 95 155
150 25 65 22 164 -6 220 -12 23 -323 569 -691 1214 -540 945 -678 1181 -714
1214 -66 61 -157 85 -241 65z"
        />
        <path
          id="triangle-line"
          d="M5495 3991 c-96 -24 -137 -69 -270 -303 -60 -106 -128 -224 -150
-263 -23 -38 -284 -495 -581 -1014 l-539 -945 0 -80 c0 -93 16 -133 73 -192
19 -20 56 -46 81 -58 l46 -21 1400 0 c1132 0 1407 3 1437 13 56 20 134 95 155
150 25 65 22 164 -6 220 -12 23 -323 569 -691 1214 -540 945 -678 1181 -714
1214 -66 61 -157 85 -241 65z m730 -1427 c363 -636 661 -1162 663 -1170 3 -12
-190 -14 -1333 -14 -741 0 -1335 4 -1333 9 10 27 1332 2331 1337 2331 3 0 303
-520 666 -1156z"
        />
        <path
          id="1"
          name="heart"
          onClick={() => onFill(1)}
          fillRule="evenodd"
          fill={fillColors[1]}
          d="M1445 3395 c-330 -61 -604 -334 -690 -687 -55 -223 -11 -527 111
-770 153 -307 347 -510 962 -1008 112 -91 224 -179 248 -197 76 -54 185 -56
262 -5 43 28 299 235 538 434 503 417 735 749 800 1146 19 115 14 311 -11 411
-39 159 -114 295 -229 418 -207 220 -470 307 -786 258 -147 -22 -279 -75 -387
-156 l-52 -39 -47 35 c-186 142 -472 206 -719 160z"
        />
        <path
          name="heart-line"
          d="M1445 3395 c-330 -61 -604 -334 -690 -687 -55 -223 -11 -527 111
-770 153 -307 347 -510 962 -1008 112 -91 224 -179 248 -197 76 -54 185 -56
262 -5 43 28 299 235 538 434 503 417 735 749 800 1146 19 115 14 311 -11 411
-39 159 -114 295 -229 418 -207 220 -470 307 -786 258 -147 -22 -279 -75 -387
-156 l-52 -39 -47 35 c-186 142 -472 206 -719 160z m405 -272 c103 -35 185
-88 240 -152 46 -56 96 -156 105 -212 8 -49 21 -50 30 -3 30 163 169 310 350
370 98 32 268 44 367 24 178 -35 338 -162 428 -340 130 -257 84 -614 -116
-906 -100 -146 -243 -299 -449 -479 -67 -59 -493 -408 -571 -468 l-24 -19
-153 123 c-422 341 -550 452 -685 593 -192 201 -306 388 -363 594 -30 108 -38
323 -15 413 50 195 181 362 349 443 95 46 151 56 292 53 113 -3 141 -8 215
-34z"
        />
      </g>
    </svg>
  )
}
