let data = {
    userData: [
        {
			'role':'member',
            'surName_zh': '陳',
            'surName_en': 'Chan',
            'givenName_zh': '大文',
            'givenName_en': 'Tai Man',
            'martialStatus': 'Married',
            'title': 'Mr',
            'gender': 'M',
			'membershipNo': '000001',
			'membershipType': 'Ordinary 普通會員',
			'membershipExpiry': '已續約',
			'membershipExpiryDate': '31/12/2024',
			'membershipFee': 'HK$600',
			'membershipForm': '已履行',
			'courses':[
				{	
					"cate":1,
					"date":'01/01/2024',
					"code":"001",
					"status":"付款/退款明細",
					"payment":"Credit Card",
					"price":"$2200",
					"reason":"退款原因",
				},{
					"cate":2,
					"date":'02/02/2024',
					"code":"002",
					"status":"付款/退款明細",
					"payment":"ATM",
					"price":"$3000",
					"reason":"退款原因",
				}
			]
        },
        {
			'role':'user',
            'surName_zh': '陳',
			'surName_en': 'Chan',
            'givenName_zh': '小文',
			'givenName_en': 'Siu Man',
            'martialStatus': 'Single',
            'title': 'Mrs',
            'gender': 'F',
			'membershipNo': '000002',
			'membershipType': 'Non-member 非會員',
			'membershipExpiry': '',
			'membershipExpiryDate': '不適用',
			'membershipFee': '',
			'membershipForm': '',
			'courses':[
			]
        }
    ]
}

export { data };