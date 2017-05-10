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
						"name": "module",
						"loc": {
							"start": {
								"line": 2,
								"column": 0
							},
							"end": {
								"line": 2,
								"column": 6
							}
						}
					},
					"property": {
						"type": "Identifier",
						"name": "exports",
						"loc": {
							"start": {
								"line": 2,
								"column": 7
							},
							"end": {
								"line": 2,
								"column": 14
							}
						}
					},
					"loc": {
						"start": {
							"line": 2,
							"column": 0
						},
						"end": {
							"line": 2,
							"column": 14
						}
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
									"raw": "'/api/common/getList'",
									"loc": {
										"start": {
											"line": 3,
											"column": 4
										},
										"end": {
											"line": 3,
											"column": 25
										}
									}
								},
								"computed": false,
								"value": {
									"type": "ObjectExpression",
									"properties": [
										{
											"type": "Property",
											"key": {
												"type": "Identifier",
												"name": "type",
												"loc": {
													"start": {
														"line": 4,
														"column": 8
													},
													"end": {
														"line": 4,
														"column": 12
													}
												}
											},
											"computed": false,
											"value": {
												"type": "Literal",
												"value": "GET",
												"raw": "'GET'",
												"loc": {
													"start": {
														"line": 4,
														"column": 14
													},
													"end": {
														"line": 4,
														"column": 19
													}
												}
											},
											"kind": "init",
											"method": false,
											"shorthand": false,
											"loc": {
												"start": {
													"line": 4,
													"column": 8
												},
												"end": {
													"line": 4,
													"column": 19
												}
											}
										},
										{
											"type": "Property",
											"key": {
												"type": "Identifier",
												"name": "request",
												"loc": {
													"start": {
														"line": 5,
														"column": 8
													},
													"end": {
														"line": 5,
														"column": 15
													}
												}
											},
											"computed": false,
											"value": {
												"type": "ObjectExpression",
												"properties": [
													{
														"type": "Property",
														"key": {
															"type": "Identifier",
															"name": "Id",
															"loc": {
																"start": {
																	"line": 6,
																	"column": 12
																},
																"end": {
																	"line": 6,
																	"column": 14
																}
															}
														},
														"computed": false,
														"value": {
															"type": "Literal",
															"value": "",
															"raw": "''",
															"loc": {
																"start": {
																	"line": 6,
																	"column": 16
																},
																"end": {
																	"line": 6,
																	"column": 18
																}
															}
														},
														"kind": "init",
														"method": false,
														"shorthand": false,
														"loc": {
															"start": {
																"line": 6,
																"column": 12
															},
															"end": {
																"line": 6,
																"column": 18
															}
														}
													},
													{
														"type": "Property",
														"key": {
															"type": "Identifier",
															"name": "CurrPage",
															"loc": {
																"start": {
																	"line": 8,
																	"column": 12
																},
																"end": {
																	"line": 8,
																	"column": 20
																}
															}
														},
														"computed": false,
														"value": {
															"type": "Literal",
															"value": 1,
															"raw": "1",
															"loc": {
																"start": {
																	"line": 8,
																	"column": 22
																},
																"end": {
																	"line": 8,
																	"column": 23
																}
															}
														},
														"kind": "init",
														"method": false,
														"shorthand": false,
														"loc": {
															"start": {
																"line": 8,
																"column": 12
															},
															"end": {
																"line": 8,
																"column": 23
															}
														}
													},
													{
														"type": "Property",
														"key": {
															"type": "Identifier",
															"name": "PageLen",
															"loc": {
																"start": {
																	"line": 9,
																	"column": 12
																},
																"end": {
																	"line": 9,
																	"column": 19
																}
															}
														},
														"computed": false,
														"value": {
															"type": "Literal",
															"value": 10,
															"raw": "10",
															"loc": {
																"start": {
																	"line": 9,
																	"column": 21
																},
																"end": {
																	"line": 9,
																	"column": 23
																}
															}
														},
														"kind": "init",
														"method": false,
														"shorthand": false,
														"loc": {
															"start": {
																"line": 9,
																"column": 12
															},
															"end": {
																"line": 9,
																"column": 23
															}
														}
													}
												],
												"loc": {
													"start": {
														"line": 5,
														"column": 17
													},
													"end": {
														"line": 10,
														"column": 9
													}
												}
											},
											"kind": "init",
											"method": false,
											"shorthand": false,
											"loc": {
												"start": {
													"line": 5,
													"column": 8
												},
												"end": {
													"line": 10,
													"column": 9
												}
											}
										},
										{
											"type": "Property",
											"key": {
												"type": "Identifier",
												"name": "response",
												"loc": {
													"start": {
														"line": 11,
														"column": 8
													},
													"end": {
														"line": 11,
														"column": 16
													}
												}
											},
											"computed": false,
											"value": {
												"type": "ObjectExpression",
												"properties": [
													{
														"type": "Property",
														"key": {
															"type": "Identifier",
															"name": "TotalNum",
															"loc": {
																"start": {
																	"line": 12,
																	"column": 12
																},
																"end": {
																	"line": 12,
																	"column": 20
																}
															}
														},
														"computed": false,
														"value": {
															"type": "Literal",
															"value": 0,
															"raw": "0",
															"loc": {
																"start": {
																	"line": 12,
																	"column": 22
																},
																"end": {
																	"line": 12,
																	"column": 23
																}
															}
														},
														"kind": "init",
														"method": false,
														"shorthand": false,
														"loc": {
															"start": {
																"line": 12,
																"column": 12
															},
															"end": {
																"line": 12,
																"column": 23
															}
														}
													},
													{
														"type": "Property",
														"key": {
															"type": "Identifier",
															"name": "Data",
															"loc": {
																"start": {
																	"line": 13,
																	"column": 12
																},
																"end": {
																	"line": 13,
																	"column": 16
																}
															}
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
																				"name": "Id",
																				"loc": {
																					"start": {
																						"line": 15,
																						"column": 20
																					},
																					"end": {
																						"line": 15,
																						"column": 22
																					}
																				}
																			},
																			"computed": false,
																			"value": {
																				"type": "Literal",
																				"value": 1,
																				"raw": "1",
																				"loc": {
																					"start": {
																						"line": 15,
																						"column": 24
																					},
																					"end": {
																						"line": 15,
																						"column": 25
																					}
																				}
																			},
																			"kind": "init",
																			"method": false,
																			"shorthand": false,
																			"loc": {
																				"start": {
																					"line": 15,
																					"column": 20
																				},
																				"end": {
																					"line": 15,
																					"column": 25
																				}
																			}
																		},
																		{
																			"type": "Property",
																			"key": {
																				"type": "Identifier",
																				"name": "Name",
																				"loc": {
																					"start": {
																						"line": 16,
																						"column": 20
																					},
																					"end": {
																						"line": 16,
																						"column": 24
																					}
																				}
																			},
																			"computed": false,
																			"value": {
																				"type": "Literal",
																				"value": "炉石传说",
																				"raw": "'炉石传说'",
																				"loc": {
																					"start": {
																						"line": 16,
																						"column": 26
																					},
																					"end": {
																						"line": 16,
																						"column": 32
																					}
																				}
																			},
																			"kind": "init",
																			"method": false,
																			"shorthand": false,
																			"loc": {
																				"start": {
																					"line": 16,
																					"column": 20
																				},
																				"end": {
																					"line": 16,
																					"column": 32
																				}
																			}
																		},
																		{
																			"type": "Property",
																			"key": {
																				"type": "Identifier",
																				"name": "OS",
																				"loc": {
																					"start": {
																						"line": 17,
																						"column": 20
																					},
																					"end": {
																						"line": 17,
																						"column": 22
																					}
																				}
																			},
																			"computed": false,
																			"value": {
																				"type": "Literal",
																				"value": 1,
																				"raw": "1",
																				"loc": {
																					"start": {
																						"line": 17,
																						"column": 24
																					},
																					"end": {
																						"line": 17,
																						"column": 25
																					}
																				}
																			},
																			"kind": "init",
																			"method": false,
																			"shorthand": false,
																			"loc": {
																				"start": {
																					"line": 17,
																					"column": 20
																				},
																				"end": {
																					"line": 17,
																					"column": 25
																				}
																			}
																		},
																		{
																			"type": "Property",
																			"key": {
																				"type": "Identifier",
																				"name": "UpdateTime",
																				"loc": {
																					"start": {
																						"line": 19,
																						"column": 20
																					},
																					"end": {
																						"line": 19,
																						"column": 30
																					}
																				}
																			},
																			"computed": false,
																			"value": {
																				"type": "Literal",
																				"value": 1493630096904,
																				"raw": "1493630096904",
																				"loc": {
																					"start": {
																						"line": 19,
																						"column": 32
																					},
																					"end": {
																						"line": 19,
																						"column": 45
																					}
																				}
																			},
																			"kind": "init",
																			"method": false,
																			"shorthand": false,
																			"loc": {
																				"start": {
																					"line": 19,
																					"column": 20
																				},
																				"end": {
																					"line": 19,
																					"column": 45
																				}
																			}
																		}
																	],
																	"loc": {
																		"start": {
																			"line": 14,
																			"column": 16
																		},
																		"end": {
																			"line": 20,
																			"column": 17
																		}
																	}
																}
															],
															"loc": {
																"start": {
																	"line": 13,
																	"column": 18
																},
																"end": {
																	"line": 21,
																	"column": 13
																}
															}
														},
														"kind": "init",
														"method": false,
														"shorthand": false,
														"loc": {
															"start": {
																"line": 13,
																"column": 12
															},
															"end": {
																"line": 21,
																"column": 13
															}
														}
													},
													{
														"type": "Property",
														"key": {
															"type": "Identifier",
															"name": "Status",
															"loc": {
																"start": {
																	"line": 22,
																	"column": 12
																},
																"end": {
																	"line": 22,
																	"column": 18
																}
															}
														},
														"computed": false,
														"value": {
															"type": "Literal",
															"value": true,
															"raw": "true",
															"loc": {
																"start": {
																	"line": 22,
																	"column": 20
																},
																"end": {
																	"line": 22,
																	"column": 24
																}
															}
														},
														"kind": "init",
														"method": false,
														"shorthand": false,
														"loc": {
															"start": {
																"line": 22,
																"column": 12
															},
															"end": {
																"line": 22,
																"column": 24
															}
														}
													},
													{
														"type": "Property",
														"key": {
															"type": "Identifier",
															"name": "Message",
															"loc": {
																"start": {
																	"line": 23,
																	"column": 12
																},
																"end": {
																	"line": 23,
																	"column": 19
																}
															}
														},
														"computed": false,
														"value": {
															"type": "Literal",
															"value": "Everything goes well",
															"raw": "'Everything goes well'",
															"loc": {
																"start": {
																	"line": 23,
																	"column": 21
																},
																"end": {
																	"line": 23,
																	"column": 43
																}
															}
														},
														"kind": "init",
														"method": false,
														"shorthand": false,
														"loc": {
															"start": {
																"line": 23,
																"column": 12
															},
															"end": {
																"line": 23,
																"column": 43
															}
														}
													}
												],
												"loc": {
													"start": {
														"line": 11,
														"column": 18
													},
													"end": {
														"line": 24,
														"column": 9
													}
												}
											},
											"kind": "init",
											"method": false,
											"shorthand": false,
											"loc": {
												"start": {
													"line": 11,
													"column": 8
												},
												"end": {
													"line": 24,
													"column": 9
												}
											}
										}
									],
									"loc": {
										"start": {
											"line": 3,
											"column": 27
										},
										"end": {
											"line": 25,
											"column": 5
										}
									}
								},
								"kind": "init",
								"method": false,
								"shorthand": false,
								"loc": {
									"start": {
										"line": 3,
										"column": 4
									},
									"end": {
										"line": 25,
										"column": 5
									}
								}
							}
						],
						"loc": {
							"start": {
								"line": 2,
								"column": 15
							},
							"end": {
								"line": 26,
								"column": 1
							}
						}
					}
				],
				"loc": {
					"start": {
						"line": 2,
						"column": 0
					},
					"end": {
						"line": 26,
						"column": 2
					}
				}
			},
			"loc": {
				"start": {
					"line": 2,
					"column": 0
				},
				"end": {
					"line": 26,
					"column": 3
				}
			}
		}
	],
	"sourceType": "script",
	"loc": {
		"start": {
			"line": 2,
			"column": 0
		},
		"end": {
			"line": 26,
			"column": 3
		}
	},
	"comments": [
		{
			"type": "Line",
			"value": " 某页面接口",
			"loc": {
				"start": {
					"line": 1,
					"column": 0
				},
				"end": {
					"line": 1,
					"column": 8
				}
			}
		},
		{
			"type": "Line",
			"value": " 空为不限",
			"loc": {
				"start": {
					"line": 6,
					"column": 20
				},
				"end": {
					"line": 6,
					"column": 27
				}
			}
		},
		{
			"type": "Line",
			"value": " 当前页",
			"loc": {
				"start": {
					"line": 8,
					"column": 25
				},
				"end": {
					"line": 8,
					"column": 31
				}
			}
		},
		{
			"type": "Line",
			"value": " 每页数量",
			"loc": {
				"start": {
					"line": 9,
					"column": 24
				},
				"end": {
					"line": 9,
					"column": 31
				}
			}
		},
		{
			"type": "Line",
			"value": " 总数据条数",
			"loc": {
				"start": {
					"line": 12,
					"column": 25
				},
				"end": {
					"line": 12,
					"column": 33
				}
			}
		},
		{
			"type": "Line",
			"value": " 名称",
			"loc": {
				"start": {
					"line": 16,
					"column": 34
				},
				"end": {
					"line": 16,
					"column": 39
				}
			}
		},
		{
			"type": "Line",
			"value": " 1-Android，2-iOS",
			"loc": {
				"start": {
					"line": 17,
					"column": 27
				},
				"end": {
					"line": 17,
					"column": 45
				}
			}
		},
		{
			"type": "Line",
			"value": " 更新时间，时间戳格式",
			"loc": {
				"start": {
					"line": 19,
					"column": 46
				},
				"end": {
					"line": 19,
					"column": 59
				}
			}
		},
		{
			"type": "Line",
			"value": " true-成功，false-失败",
			"loc": {
				"start": {
					"line": 22,
					"column": 26
				},
				"end": {
					"line": 22,
					"column": 45
				}
			}
		},
		{
			"type": "Line",
			"value": " 返回消息",
			"loc": {
				"start": {
					"line": 23,
					"column": 44
				},
				"end": {
					"line": 23,
					"column": 51
				}
			}
		}
	]
}