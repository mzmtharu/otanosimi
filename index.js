for (M = N = [i = 113]; --i; M[i - 1] = i % 8 < 2 | i < 8) {
    function Y() {
        e++;
        if (e %= 10)
            for (N = [K - 2 ? K - 50 ? h -= M[h + l - K] | M[h - K] ? 0 : K : M[h + p] ||
                    (x = p, p = -l, l = x) : e = 0], K = 0; ++i < 113; N[i] = M[i])
                N[h] = B >> 2, N[h + l] = B % 4 - B % 1 + 2;

        if (!e && (h -= 8, !g || M[h] + M[h + l])) {
            C = [M = N];
            for (i = g = 1; ++i < 103; !M[i] * n && (M[i] = n, g = M[i + 8] = 0))
                n = M[i + 8];
            for (; --i;) {
                n = c = 0;
                for (E = [i]; g & M[i] > 1 & n >= c >> 2; t > 102 | C[t] | M[i] - M[t] || (E[++n] = C[t] = t))
                    t = p, p = -l, l = t, t += E[c++ >> 2];
                for (; c > 16 && n;) g = M[E[n--]] = 0;
            }
            B = g ? Math.random(h = 100, l = 8, p = -1) * 16 + 8 : --e;
        }

        for (i = 104, S = ""; i--; S += n-- ? n ? `<a class='puyo' style='background:#${248 * n}; color:#fff;'>●</a>` : i % 8 ? "■" : "■<br>" : "＿")
            n = N[i];
        D.innerHTML = S;
        document.body.style.backgroundColor = "#191950";    //背景色の変更


        M[100] * g || setTimeout(Y, 50);
    }
}
Y(g = h = e = 9, l = p = K = 0);
