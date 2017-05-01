const data = {
	"type": "Program",
	"body": [
		{
			"type": "ExpressionStatement",
			"expression": {
				"type": "CallExpression",
				"callee": {
					"type": "MemberExpression",
					"computed": false,
					"object": {
						"type": "Identifier",
						"name": "module"
					},
					"property": {
						"type": "Identifier",
						"name": "exports"
					}
				},
				"arguments": [
					{
						"type": "ObjectExpression",
						"properties": [
							{
								"type": "Property",
								"key": {
									"type": "Literal",
									"value": "/api/common/upload",
									"raw": "'/api/common/upload'"
								},
								"computed": false,
								"value": {
									"type": "ObjectExpression",
									"properties": [
										{
											"type": "Property",
											"key": {
												"type": "Identifier",
												"name": "type"
											},
											"computed": false,
											"value": {
												"type": "Literal",
												"value": "POST",
												"raw": "'POST'"
											},
											"kind": "init",
											"method": false,
											"shorthand": false
										},
										{
											"type": "Property",
											"key": {
												"type": "Identifier",
												"name": "request"
											},
											"computed": false,
											"value": {
												"type": "ObjectExpression",
												"properties": [
													{
														"type": "Property",
														"key": {
															"type": "Identifier",
															"name": "Width"
														},
														"computed": false,
														"value": {
															"type": "Literal",
															"value": 600,
															"raw": "600"
														},
														"kind": "init",
														"method": false,
														"shorthand": false
													},
													{
														"type": "Property",
														"key": {
															"type": "Identifier",
															"name": "Height"
														},
														"computed": false,
														"value": {
															"type": "Literal",
															"value": 800,
															"raw": "800"
														},
														"kind": "init",
														"method": false,
														"shorthand": false,
														"leadingComments": [
															{
																"type": "Line",
																"value": " 宽",
																"range": [
																	132,
																	136
																]
															}
														],
														"trailingComments": [
															{
																"type": "Line",
																"value": " 高",
																"range": [
																	162,
																	166
																]
															}
														]
													}
												]
											},
											"kind": "init",
											"method": false,
											"shorthand": false
										},
										{
											"type": "Property",
											"key": {
												"type": "Identifier",
												"name": "response"
											},
											"computed": false,
											"value": {
												"type": "ObjectExpression",
												"properties": [
													{
														"type": "Property",
														"key": {
															"type": "Identifier",
															"name": "Data"
														},
														"computed": false,
														"value": {
															"type": "Literal",
															"value": "https://cdn.example.com/example.png",
															"raw": "'https://cdn.example.com/example.png'"
														},
														"kind": "init",
														"method": false,
														"shorthand": false
													},
													{
														"type": "Property",
														"key": {
															"type": "Identifier",
															"name": "Status"
														},
														"computed": false,
														"value": {
															"type": "Literal",
															"value": true,
															"raw": "true"
														},
														"kind": "init",
														"method": false,
														"shorthand": false,
														"leadingComments": [
															{
																"type": "Line",
																"value": " 返回图片地址",
																"range": [
																	258,
																	267
																]
															}
														]
													},
													{
														"type": "Property",
														"key": {
															"type": "Identifier",
															"name": "Message"
														},
														"computed": false,
														"value": {
															"type": "Literal",
															"value": "Everything goes well",
															"raw": "'Everything goes well'"
														},
														"kind": "init",
														"method": false,
														"shorthand": false,
														"leadingComments": [
															{
																"type": "Line",
																"value": " true-成功，false-失败",
																"range": [
																	295,
																	314
																]
															}
														],
														"trailingComments": [
															{
																"type": "Line",
																"value": " 返回消息",
																"range": [
																	360,
																	367
																]
															}
														]
													}
												]
											},
											"kind": "init",
											"method": false,
											"shorthand": false,
											"leadingComments": [
												{
													"type": "Line",
													"value": " 高",
													"range": [
														162,
														166
													]
												}
											]
										}
									]
								},
								"kind": "init",
								"method": false,
								"shorthand": false
							}
						]
					}
				]
			},
			"leadingComments": [
				{
					"type": "Line",
					"value": " API Example 2",
					"range": [
						0,
						16
					]
				}
			]
		}
	],
	"sourceType": "script"
}