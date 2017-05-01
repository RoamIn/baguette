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
									"value": "/api/common/getList",
									"raw": "'/api/common/getList'"
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
												"value": "GET",
												"raw": "'GET'"
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
															"name": "Id"
														},
														"computed": false,
														"value": {
															"type": "Literal",
															"value": "",
															"raw": "''"
														},
														"kind": "init",
														"method": false,
														"shorthand": false
													},
													{
														"type": "Property",
														"key": {
															"type": "Identifier",
															"name": "currPage"
														},
														"computed": false,
														"value": {
															"type": "Literal",
															"value": 1,
															"raw": "1"
														},
														"kind": "init",
														"method": false,
														"shorthand": false,
														"leadingComments": [
															{
																"type": "Line",
																"value": " 空为不限",
																"range": [
																	126,
																	133
																]
															}
														]
													},
													{
														"type": "Property",
														"key": {
															"type": "Identifier",
															"name": "pageLen"
														},
														"computed": false,
														"value": {
															"type": "Literal",
															"value": 10,
															"raw": "10"
														},
														"kind": "init",
														"method": false,
														"shorthand": false,
														"leadingComments": [
															{
																"type": "Line",
																"value": " 当前页",
																"range": [
																	162,
																	168
																]
															}
														],
														"trailingComments": [
															{
																"type": "Line",
																"value": " 每页数量",
																"range": [
																	194,
																	201
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
															"name": "TotalNum"
														},
														"computed": false,
														"value": {
															"type": "Literal",
															"value": 0,
															"raw": "0"
														},
														"kind": "init",
														"method": false,
														"shorthand": false
													},
													{
														"type": "Property",
														"key": {
															"type": "Identifier",
															"name": "Data"
														},
														"computed": false,
														"value": {
															"type": "ArrayExpression",
															"elements": [
																{
																	"type": "ObjectExpression",
																	"properties": [
																		{
																			"type": "Property",
																			"key": {
																				"type": "Identifier",
																				"name": "Id"
																			},
																			"computed": false,
																			"value": {
																				"type": "Literal",
																				"value": 1,
																				"raw": "1"
																			},
																			"kind": "init",
																			"method": false,
																			"shorthand": false
																		},
																		{
																			"type": "Property",
																			"key": {
																				"type": "Identifier",
																				"name": "Name"
																			},
																			"computed": false,
																			"value": {
																				"type": "Literal",
																				"value": "炉石传说",
																				"raw": "'炉石传说'"
																			},
																			"kind": "init",
																			"method": false,
																			"shorthand": false
																		},
																		{
																			"type": "Property",
																			"key": {
																				"type": "Identifier",
																				"name": "OS"
																			},
																			"computed": false,
																			"value": {
																				"type": "Literal",
																				"value": 1,
																				"raw": "1"
																			},
																			"kind": "init",
																			"method": false,
																			"shorthand": false,
																			"leadingComments": [
																				{
																					"type": "Line",
																					"value": " 名称",
																					"range": [
																						373,
																						378
																					]
																				}
																			]
																		},
																		{
																			"type": "Property",
																			"key": {
																				"type": "Identifier",
																				"name": "UpdateTime"
																			},
																			"computed": false,
																			"value": {
																				"type": "Literal",
																				"value": 1493630096904,
																				"raw": "1493630096904"
																			},
																			"kind": "init",
																			"method": false,
																			"shorthand": false,
																			"leadingComments": [
																				{
																					"type": "Line",
																					"value": " 1-Android，2-iOS",
																					"range": [
																						407,
																						425
																					]
																				}
																			],
																			"trailingComments": [
																				{
																					"type": "Line",
																					"value": " 更新时间，时间戳格式",
																					"range": [
																						473,
																						486
																					]
																				}
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
																"value": " 总数据条数",
																"range": [
																	261,
																	269
																]
															}
														]
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
																"value": " 更新时间，时间戳格式",
																"range": [
																	473,
																	486
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
																	549,
																	568
																]
															}
														],
														"trailingComments": [
															{
																"type": "Line",
																"value": " 返回消息",
																"range": [
																	614,
																	621
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
													"value": " 每页数量",
													"range": [
														194,
														201
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
					"value": " API Example",
					"range": [
						0,
						14
					]
				}
			]
		}
	],
	"sourceType": "script"
}