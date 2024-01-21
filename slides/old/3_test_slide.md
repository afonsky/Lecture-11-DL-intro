## Test slide

`spec="@maths 1-9"`

$$
\gdef\lnp{\ln p}
\gdef\mcol{\blue}
\gdef\m{\mcol{μ}}
\gdef\pcol{\green}
\gdef\p{\pcol{π}}
\gdef\zcol{\red}
\gdef\z{\zcol{z}}
\gdef\Z{\zcol{Z}}
\gdef\s{σ}
\gdef\ndist#1#2{\mathcal{N}(#1,#2)}
\gdef\ndens#1#2#3{\mathcal{N}(#1,#2)(#3)}
\gdef\E{\mathbb{E}}
\gdef\comm#1{\text{\textcolor{gray}{#1} } }
$$

<Anim spec="@maths 1-9">

$$
\begin{align*}
\ln q_π(\p)
& = \E_{\neg π}[\lnp(X,\Z,\p,\m)] + K_1 \\
& \;\;\;\;\; \comm{(remove what is constant (and thus remains after expectation) with respect to $\p$)} \\
& = \E_{\neg π}\left[\ln prior(\p) + \sum_i \ln \p_{\z_i}\right] + K_2 \\
& \;\;\;\;\; \comm{(simplifying the expectations)} \\
& = \ln prior(\p) + \sum_i \E_{\z_i}[\ln \p_{\z_i}] + K_2 \\
& = \ln prior(\p) + \sum_i \sum_k q_z^i(k) \ln \p_k + K_2 \\
& \;\;\;\;\; \comm{($Dir(α)$ prior + swap sums)} \\
& = \sum_k (α_k -1 ) \ln \p_k + \sum_k \sum_i q_z^i(k) \ln \p_k + K_3 
\;\; \comm{with $q_z^i(k)$ the responsibility, i.e. $R_{ik}$} \\
& = \sum_k ((α_k+\sum_i R_{ik}) -1 ) \ln \p_k + K_3
\;\; \comm{(once reorganized)}
\end{align*}
$$

</Anim>