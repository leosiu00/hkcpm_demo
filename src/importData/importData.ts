let data = {
    userData: [
        {
            'surName_zh': '陳',
            'surName_en': 'Chan',
            'givenName_zh': '大文',
            'givenName_en': 'Tai Man',
            'martialStatus': 'Married',
            'title': 'Mr',
            'gender': 'M',
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
            'surname': '陳',
            'givenName': '小文',
            'martialStatus': 'Single',
            'title': 'Mrs',
            'gender': 'F',
        },
        {
            'surname': '李',
            'givenName': '小明',
            'martialStatus': 'Single',
            'title': 'Dr',
        },
    ]
}

export { data };