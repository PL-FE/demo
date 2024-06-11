export default defineEventHandler(async event => {
	const repo = await $fetch('https://stock.xueqiu.com/v5/stock/quote.json', {
		method: 'GET',
		params: { symbol: 'SZ300122', extend: 'detail' },
		headers: {
			cookie: 'xq_a_token=0518d12486f7876b2f98097d9ec9214afa97c2a0; xqat=0518d12486f7876b2f98097d9ec9214afa97c2a0; xq_r_token=fc7d679707be09bbf6da361632fe9a5facb99f94; xq_id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOi0xLCJpc3MiOiJ1YyIsImV4cCI6MTcyMDE0MDcyMCwiY3RtIjoxNzE4MDkxMjU5NTE0LCJjaWQiOiJkOWQwbjRBWnVwIn0.dXb1tJqT_3CCMg1CayUg_j8GHfvajVB0ADNMQ_7wH_KXi1QiqQLBGDEfkfbQGJV8HUN6ZP4iyMzD80YkwrvI8kbBtsyDdaN5hMjf-aYEDfU_b14noCDe8_jNh1Bt4vG70jVDYcGiQrBh5Coj_C6Ie0udXg39xeSFjpjx-BN0cFz5uumHPgUSHu0BoIv0KYk-hCcyV5mZJlGu50nG3DaW1iSGiSD4EUx_frS0orqkcDZnR109O8VRrGXYc0cl4JunC1Zx2mZS4qswFVs58EllGqwCA3SqkUkbWyJOiBZJMp8fl8hh7CbHSo8aXNyZRQGyiYaE7bNu81rmRyTLhPZedw; cookiesu=251718091284034; u=251718091284034; is_overseas=0',
		},
	})

	return repo
})
