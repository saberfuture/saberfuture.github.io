const a0_0x3de4e5=a0_0xe5a4;(function(_0x2c35da,_0x20fb46){const _0x51e29b=a0_0xe5a4,_0x2fb77d=_0x2c35da();while(!![]){try{const _0x3e48a6=parseInt(_0x51e29b(0x1cc))/0x1*(-parseInt(_0x51e29b(0x19f))/0x2)+parseInt(_0x51e29b(0x16f))/0x3+parseInt(_0x51e29b(0x1bd))/0x4*(parseInt(_0x51e29b(0x1c7))/0x5)+-parseInt(_0x51e29b(0x174))/0x6*(-parseInt(_0x51e29b(0x1a2))/0x7)+-parseInt(_0x51e29b(0x1c6))/0x8*(parseInt(_0x51e29b(0x1d6))/0x9)+parseInt(_0x51e29b(0x1dc))/0xa+-parseInt(_0x51e29b(0x1c8))/0xb*(parseInt(_0x51e29b(0x1bb))/0xc);if(_0x3e48a6===_0x20fb46)break;else _0x2fb77d['push'](_0x2fb77d['shift']());}catch(_0x26b490){_0x2fb77d['push'](_0x2fb77d['shift']());}}}(a0_0x57eb,0x6b3e1));let apiUrl=a0_0x3de4e5(0x1a7),queryBtn=document[a0_0x3de4e5(0x191)](a0_0x3de4e5(0x1d3)),downloadKlineBtn=document[a0_0x3de4e5(0x191)](a0_0x3de4e5(0x1b3)),closeKlineBtn=document[a0_0x3de4e5(0x191)](a0_0x3de4e5(0x1c9)),symbolSelect=document[a0_0x3de4e5(0x191)]('symbolSelect'),intervalSelect=document[a0_0x3de4e5(0x191)](a0_0x3de4e5(0x16e)),startTimeInput=document[a0_0x3de4e5(0x191)](a0_0x3de4e5(0x1be)),endTimeInput=document['getElementById'](a0_0x3de4e5(0x194)),klineDialog=document[a0_0x3de4e5(0x191)](a0_0x3de4e5(0x177)),klineTable=document[a0_0x3de4e5(0x191)](a0_0x3de4e5(0x18b)),positionSideSelect=document['getElementById'](a0_0x3de4e5(0x1d7)),computeBtn=document['getElementById'](a0_0x3de4e5(0x17d)),closeMartingaleBtn=document[a0_0x3de4e5(0x191)]('closeMartingaleBtn'),computeMartingaleDialog=document[a0_0x3de4e5(0x191)](a0_0x3de4e5(0x1b7)),symbol=symbolSelect[a0_0x3de4e5(0x1c4)],interval=intervalSelect['value'],startTime=new Date(startTimeInput[a0_0x3de4e5(0x1c4)])[a0_0x3de4e5(0x1db)](),endTime=new Date(endTimeInput[a0_0x3de4e5(0x1c4)])[a0_0x3de4e5(0x1db)](),positionSide=positionSideSelect[a0_0x3de4e5(0x1c4)],klineData=[],currentStartTime=startTime,totalResults=0x0;symbolSelect['onchange']=function(){const _0x5070b4=a0_0x3de4e5;symbol=symbolSelect[_0x5070b4(0x1c4)];},intervalSelect['onchange']=function(){interval=intervalSelect['value'];},startTimeInput['onchange']=function(){startTime=new Date(startTimeInput['value'])['getTime']();},endTimeInput['onchange']=function(){const _0x5df84f=a0_0x3de4e5;endTime=new Date(endTimeInput[_0x5df84f(0x1c4)])[_0x5df84f(0x1db)]();},positionSideSelect['onchange']=function(){const _0x444970=a0_0x3de4e5;positionSide=positionSideSelect[_0x444970(0x1c4)];},queryBtn['onclick']=function(){const _0x54f86e=a0_0x3de4e5;queryBtn['disabled']=!![],queryBtn[_0x54f86e(0x189)]['backgroundColor']=_0x54f86e(0x1d0),query();},computeBtn['onclick']=function(){compute();};function query(){const _0x1a2d75=a0_0x3de4e5;klineData=[],currentStartTime=startTime,totalResults=0x0,klineTable[_0x1a2d75(0x1b2)]='',queryWithLimit(currentStartTime);}function queryWithLimit(_0x234650){const _0xadf3ac=a0_0x3de4e5;let _0x51ad7a=_0xadf3ac(0x185)+symbol+_0xadf3ac(0x1b0)+_0xadf3ac(0x18e)+interval+_0xadf3ac(0x18a)+_0x234650+_0xadf3ac(0x1e0)+endTime+'&limit=1000',_0x54dcf8=setTimeout(()=>{const _0x3f5a65=_0xadf3ac;alert(_0x3f5a65(0x19c));},0x1388);fetch(apiUrl+_0x51ad7a)[_0xadf3ac(0x1a5)](function(_0x54a98e){const _0x493df1=_0xadf3ac;return!_0x54a98e['ok']&&alert(_0x493df1(0x1a9)),clearTimeout(_0x54dcf8),_0x54a98e[_0x493df1(0x1d2)]();})[_0xadf3ac(0x1a5)](function(_0x4dd01e){const _0x492bc0=_0xadf3ac;totalResults+=_0x4dd01e[_0x492bc0(0x1ba)],currentStartTime=_0x4dd01e[_0x4dd01e[_0x492bc0(0x1ba)]-0x1][0x0]+0x1,klineData=klineData[_0x492bc0(0x17b)](_0x4dd01e),localStorage['setItem']('klineData',JSON['stringify'](klineData));if(_0x4dd01e[_0x492bc0(0x1ba)]<0x3e8){showKlineTable(0x1),klineDialog[_0x492bc0(0x189)][_0x492bc0(0x1ac)]='block';return;}new Promise(_0x10fb9c=>{setTimeout(_0x10fb9c,0x3e8);})[_0x492bc0(0x1a5)](()=>{queryWithLimit(currentStartTime);});})['catch'](_0x154e15=>{clearTimeout(_0x54dcf8),alert('查询K线数据异常，请检查当前IP能否访问币安API\x20'+_0x154e15['message']);});}function showKlineTable(_0x440ee8){const _0xa40dbd=a0_0x3de4e5;klineTable[_0xa40dbd(0x1b2)]='';let _0x505f38=0xa,_0x46e3ff=(_0x440ee8-0x1)*_0x505f38,_0x532599=_0x46e3ff+_0x505f38,_0x5e3449=klineData[_0xa40dbd(0x1d8)](_0x46e3ff,_0x532599),_0xba6dfd=document[_0xa40dbd(0x1a6)](_0xa40dbd(0x1c1));_0xba6dfd[_0xa40dbd(0x1b2)]=_0xa40dbd(0x193),klineTable[_0xa40dbd(0x173)](_0xba6dfd);let _0x483af9=document[_0xa40dbd(0x1a6)](_0xa40dbd(0x169));console[_0xa40dbd(0x1da)](_0x5e3449),_0x5e3449[_0xa40dbd(0x1b4)](function(_0x17839b){const _0x97affb=_0xa40dbd;let _0x513d16=document[_0x97affb(0x1a6)]('tr');_0x513d16[_0x97affb(0x1b2)]=_0x97affb(0x180)+new Date(_0x17839b[0x0])[_0x97affb(0x1ab)]()+_0x97affb(0x16c)+_0x17839b[0x1]+_0x97affb(0x16c)+_0x17839b[0x2]+'</td><td>'+_0x17839b[0x3]+_0x97affb(0x16c)+_0x17839b[0x4]+'</td><td>'+_0x17839b[0x5]+_0x97affb(0x16c)+new Date(_0x17839b[0x6])['toLocaleString']()+'</td><td>'+_0x17839b[0x7]+_0x97affb(0x16c)+_0x17839b[0x8]+'</td><td>'+_0x17839b[0x9]+_0x97affb(0x16c)+_0x17839b[0xa]+'</td><td>'+_0x17839b[0xb]+'</td>',_0x483af9[_0x97affb(0x173)](_0x513d16);}),klineTable[_0xa40dbd(0x173)](_0x483af9);let _0x29066e=document[_0xa40dbd(0x1a6)](_0xa40dbd(0x188));_0x29066e[_0xa40dbd(0x1a4)]=_0xa40dbd(0x1ce);let _0x6fe17a=Math[_0xa40dbd(0x1cd)](klineData['length']/_0x505f38);for(let _0x4945d8=0x1;_0x4945d8<=_0x6fe17a;_0x4945d8++){let _0x510486=document['createElement']('a');_0x510486['href']='#',_0x510486[_0xa40dbd(0x1a4)]='page-link',_0x510486[_0xa40dbd(0x178)]=_0x4945d8+'',_0x510486['addEventListener'](_0xa40dbd(0x197),()=>showKlineTable(_0x4945d8)),_0x4945d8===_0x440ee8&&_0x510486[_0xa40dbd(0x170)][_0xa40dbd(0x1a1)](_0xa40dbd(0x1cb)),_0x29066e[_0xa40dbd(0x173)](_0x510486);}klineTable[_0xa40dbd(0x173)](_0x29066e);}closeKlineBtn['onclick']=function(){const _0x4043a8=a0_0x3de4e5;klineDialog[_0x4043a8(0x189)][_0x4043a8(0x1ac)]=_0x4043a8(0x179);},closeMartingaleBtn[a0_0x3de4e5(0x196)]=function(){const _0x3872e4=a0_0x3de4e5;computeMartingaleDialog[_0x3872e4(0x189)][_0x3872e4(0x1ac)]=_0x3872e4(0x179);},downloadKlineBtn[a0_0x3de4e5(0x196)]=function(){const _0x2f7bc3=a0_0x3de4e5;let _0x2e2747=symbol+'_'+interval+_0x2f7bc3(0x1b9);const _0x486940=0x8*0x3c*0x3c*0x3e8;let _0x1c6faf=klineData[_0x2f7bc3(0x198)](function(_0x5e9a38){const _0x3b8292=_0x2f7bc3;return{'timestamp':parseInt(_0x5e9a38[0x0]),'date':new Date(parseFloat(_0x5e9a38[0x0])+_0x486940)[_0x3b8292(0x1af)](),'open':parseFloat(_0x5e9a38[0x1]),'high':parseFloat(_0x5e9a38[0x2]),'low':parseFloat(_0x5e9a38[0x3]),'close':parseFloat(_0x5e9a38[0x4]),'volume':parseFloat(_0x5e9a38[0x5]),'closeTime':parseInt(_0x5e9a38[0x6]),'quoteAssetVolume':parseFloat(_0x5e9a38[0x7]),'numberOfTrades':parseInt(_0x5e9a38[0x8]),'takerBuyBaseAssetVolume':parseFloat(_0x5e9a38[0x9]),'takerBuyQuoteAssetVolume':parseFloat(_0x5e9a38[0xa]),'ignore':parseInt(_0x5e9a38[0xb])};}),_0x56a321=document[_0x2f7bc3(0x1a6)]('a');_0x56a321[_0x2f7bc3(0x19a)]=_0x2e2747,_0x56a321['href']=_0x2f7bc3(0x1df)+encodeURIComponent(JSON[_0x2f7bc3(0x176)](_0x1c6faf,null,0x2)),_0x56a321[_0x2f7bc3(0x189)][_0x2f7bc3(0x1ac)]=_0x2f7bc3(0x179),document['body'][_0x2f7bc3(0x173)](_0x56a321),_0x56a321[_0x2f7bc3(0x197)](),document[_0x2f7bc3(0x1dd)]['removeChild'](_0x56a321);};function compute(){const _0x389ff9=a0_0x3de4e5;console[_0x389ff9(0x1da)]('开始执行马丁格尔策略');let _0x430d1a=document[_0x389ff9(0x191)](_0x389ff9(0x1b7));_0x430d1a[_0x389ff9(0x189)][_0x389ff9(0x1ac)]=_0x389ff9(0x17c);let _0xc3ca0e=parseFloat(document[_0x389ff9(0x191)](_0x389ff9(0x175))['value']),_0x176151=parseFloat(document[_0x389ff9(0x191)](_0x389ff9(0x1ad))[_0x389ff9(0x1c4)]),_0x3c3246=parseFloat(document[_0x389ff9(0x191)]('baseAmount')['value']),_0x2231cc=parseFloat(document[_0x389ff9(0x191)](_0x389ff9(0x1b8))['value']),_0x4fde67=parseFloat(document[_0x389ff9(0x191)](_0x389ff9(0x1ae))[_0x389ff9(0x1c4)]),_0x2691d3=parseInt(document[_0x389ff9(0x191)]('maxAdditionCount')['value']),_0x3e33a3=parseFloat(document[_0x389ff9(0x191)](_0x389ff9(0x187))['value']),_0x16afb4=parseFloat(document['getElementById']('additionMultiplier')[_0x389ff9(0x1c4)]),_0x343b66=parseFloat(document[_0x389ff9(0x191)](_0x389ff9(0x192))['value']),_0x531f8b=[],_0x50200d=JSON[_0x389ff9(0x190)](localStorage['getItem']('klineData'));if(_0x50200d==null||_0x50200d[_0x389ff9(0x1ba)]===0x0){let _0x517a48=new XMLHttpRequest();_0x517a48[_0x389ff9(0x17e)](_0x389ff9(0x184),_0x389ff9(0x1d5),![]),_0x517a48[_0x389ff9(0x1bc)](),(_0x517a48['status']===0xc8||_0x517a48[_0x389ff9(0x182)]===0x0)&&(_0x531f8b=JSON[_0x389ff9(0x190)](_0x517a48[_0x389ff9(0x199)]));}else{const _0x29a675=0x8*0x3c*0x3c*0x3e8;for(let _0x1a1a51=0x0;_0x1a1a51<_0x50200d[_0x389ff9(0x1ba)];_0x1a1a51++){let _0x5536e0=_0x50200d[_0x1a1a51];_0x531f8b['push']({'date':new Date(parseFloat(_0x5536e0[0x0])+_0x29a675)[_0x389ff9(0x1af)](),'open':parseFloat(_0x5536e0[0x1]),'high':parseFloat(_0x5536e0[0x2]),'low':parseFloat(_0x5536e0[0x3]),'close':parseFloat(_0x5536e0[0x4])});}}let _0x51d543=positionSide===_0x389ff9(0x1aa),_0x4647d8=0x0;_0x16afb4===0x1?_0x4647d8=_0x176151+_0x3c3246*_0x16afb4:_0x4647d8=_0x176151+_0x3c3246*(0x1-Math['pow'](_0x16afb4,_0x2691d3))/(0x1-_0x16afb4);let _0x3c09b9=0x0,_0x54db0a=_0x531f8b[0x0]['close'],_0xa1281b=0x0,_0x2c1bad=_0x531f8b[0x0]['close'],_0x48ea68=_0x51d543?_0x54db0a*(0x1-_0x2231cc):_0x54db0a*(0x1+_0x2231cc),_0x1394e7=_0x51d543?_0x54db0a*(0x1+_0x4fde67):_0x54db0a*(0x1-_0x4fde67),_0x521a0c=_0x531f8b[0x0][_0x389ff9(0x1a0)],_0x3854df=[],_0x380909=[],_0x4d0bdf=[];_0x531f8b[_0x389ff9(0x1b4)](_0xafe2d9=>{const _0x452a2c=_0x389ff9;let _0x1ff407=(_0x51d543?_0xafe2d9[_0x452a2c(0x1de)]-_0x521a0c:_0x521a0c-_0xafe2d9['high'])/_0x521a0c;_0x4647d8<Math['abs'](_0x3c09b9)*(_0x51d543?_0x54db0a-_0xafe2d9[_0x452a2c(0x1de)]:_0xafe2d9[_0x452a2c(0x19e)]-_0x54db0a)&&(_0x4647d8=0x0,_0x3c09b9=0x0,_0xa1281b=0x0);if(_0xa1281b<_0x2691d3&&_0x1ff407<=-_0x2231cc*Math[_0x452a2c(0x1c3)](_0x3e33a3,_0xa1281b)&&(_0x51d543&&_0x3c09b9>0x0||!_0x51d543&&_0x3c09b9<0x0)){let _0x263566=_0xc3ca0e*_0x3c3246*Math[_0x452a2c(0x1c3)](_0x16afb4,_0xa1281b),_0x1351ad=_0x51d543?_0x263566/_0xafe2d9[_0x452a2c(0x1a0)]:-_0x263566/_0xafe2d9[_0x452a2c(0x1a0)];_0x3c09b9+=_0x1351ad,_0x4647d8-=_0x263566*_0x343b66,_0x54db0a=(_0x54db0a*Math['abs'](_0x3c09b9)+_0xafe2d9[_0x452a2c(0x1a0)]*Math[_0x452a2c(0x1cf)](_0x1351ad))/Math[_0x452a2c(0x1cf)](_0x3c09b9+_0x1351ad),_0xa1281b++,_0x521a0c=_0xafe2d9['close'],_0x48ea68=_0x51d543?_0x2c1bad*(0x1-_0x2231cc*Math[_0x452a2c(0x1c3)](_0x3e33a3,_0xa1281b)):_0x2c1bad*(0x1+_0x2231cc*Math[_0x452a2c(0x1c3)](_0x3e33a3,_0xa1281b)),_0x1394e7=_0x51d543?_0x54db0a*(0x1+_0x4fde67):_0x54db0a*(0x1-_0x4fde67),console['log'](_0x452a2c(0x1c2)+_0xafe2d9['date']+_0x452a2c(0x19b)+_0xa1281b+_0x452a2c(0x1bf)+_0xafe2d9['close']+_0x452a2c(0x1b1)+_0x3c09b9+_0x452a2c(0x18f)+_0x54db0a+_0x452a2c(0x1d9)+_0x4647d8);}(_0x51d543&&_0x3c09b9>0x0&&_0xafe2d9['high']>=_0x1394e7||!_0x51d543&&_0x3c09b9<0x0&&_0xafe2d9[_0x452a2c(0x1de)]<=_0x1394e7)&&(_0x4647d8+=_0x54db0a*Math['abs'](_0x3c09b9)*_0x4fde67,_0x4647d8-=_0x54db0a*Math[_0x452a2c(0x1cf)](_0x3c09b9)*_0x343b66,_0x3c09b9=0x0,_0x54db0a=_0xafe2d9['close'],_0xa1281b=0x0,_0x2c1bad=_0xafe2d9['close'],_0x521a0c=_0xafe2d9[_0x452a2c(0x1a0)],_0x48ea68=_0x51d543?_0x54db0a*(0x1-_0x2231cc):_0x54db0a*(0x1+_0x2231cc),_0x1394e7=_0x51d543?_0x54db0a*(0x1+_0x4fde67):_0x54db0a*(0x1-_0x4fde67),console[_0x452a2c(0x1da)](_0x452a2c(0x172)+_0xafe2d9[_0x452a2c(0x1d1)]+'\x20加仓次数:\x20'+_0xa1281b+_0x452a2c(0x1bf)+_0x1394e7+'\x20仓位:\x20'+_0x3c09b9+_0x452a2c(0x18f)+_0x54db0a+_0x452a2c(0x1d9)+_0x4647d8));if(_0x3c09b9===0x0&&_0x4647d8>0.1){let _0x5d88ac=Math['min'](_0x4647d8,_0x176151*_0xc3ca0e);_0x3c09b9=_0x51d543?_0x5d88ac/_0xafe2d9[_0x452a2c(0x1a0)]:-_0x5d88ac/_0xafe2d9['close'],_0x4647d8-=_0x5d88ac*_0x343b66,_0x54db0a=_0xafe2d9[_0x452a2c(0x1a0)],_0xa1281b=0x0,_0x521a0c=_0xafe2d9[_0x452a2c(0x1a0)],_0x2c1bad=_0xafe2d9[_0x452a2c(0x1a0)],_0x48ea68=_0x51d543?_0x54db0a*(0x1-_0x2231cc):_0x54db0a*(0x1+_0x2231cc),_0x1394e7=_0x51d543?_0x54db0a*(0x1+_0x4fde67):_0x54db0a*(0x1-_0x4fde67),console[_0x452a2c(0x1da)](_0x452a2c(0x1b5)+_0xafe2d9['date']+_0x452a2c(0x19b)+_0xa1281b+'\x20价格:\x20'+_0xafe2d9[_0x452a2c(0x1a0)]+_0x452a2c(0x1b1)+_0x3c09b9+_0x452a2c(0x18f)+_0x54db0a+'\x20资金:\x20'+_0x4647d8);}_0x380909['push'](_0x54db0a);let _0x45b802=_0x54db0a+(_0x51d543?-0x1:0x1)*_0x4647d8/Math[_0x452a2c(0x1cf)](_0x3c09b9);_0x4d0bdf['push'](Math['abs'](0x1-_0x45b802/_0x54db0a)<=0.3?_0x45b802:_0x54db0a),_0x3854df[_0x452a2c(0x19d)](_0x4647d8);}),document[_0x389ff9(0x191)](_0x389ff9(0x1a3))[_0x389ff9(0x178)]=_0x389ff9(0x17f)+_0x3854df[0x0]+_0x389ff9(0x1c0)+_0x4647d8+_0x389ff9(0x171)+(_0x4647d8-_0x3854df[0x0])+_0x389ff9(0x1c5)+(_0x4647d8/_0x3854df[0x0]-0x1)*0x64+'%',renderChart(_0x531f8b,_0x380909,_0x4d0bdf,_0x3854df),console['log']('结束执行马丁格尔策略');}function a0_0x57eb(){const _0x1b1dfa=['value','\x20收益率：','1304200ScJDwa','5BTseYl','682nBoKxp','closeKlineBtn','circle','current','82046RfQtKS','ceil','page-links','abs','gray','date','json','queryBtn','总资金','./btc_15m.json','36PwyyCo','positionSideSelect','slice','\x20资金:\x20','log','getTime','174490VmUmmt','body','low','data:application/json;charset=utf-8,','&endTime=','tbody','scatter','风险价格','</td><td>','#8A0000','intervalSelect','2035251fuffTv','classList','\x20收益：','平仓\x20时间:\x20','appendChild','9228hFiRhU','leverage','stringify','klineDialog','innerText','none','right','concat','block','computeBtn','open','\x20总计投入保证金：','<td>','收益曲线','status','#008F28','GET','?symbol=','computeMartingaleChart','priceMultiplier','div','style','&startTime=','klineTable','setOption','axis','&interval=','\x20仓位价格:\x20','parse','getElementById','tradeFee','<tr><th>Time</th><th>Open</th><th>High</th><th>Low</th><th>Close</th><th>Volume</th><th>Close\x20Time</th><th>Quote\x20Asset\x20Volume</th><th>Number\x20of\x20Trades</th><th>Taker\x20Buy\x20Base\x20Asset\x20Volume</th><th>Taker\x20Buy\x20Quote\x20Asset\x20Volume</th><th>Ignore</th></tr>','endTime','init','onclick','click','map','responseText','download','\x20加仓次数:\x20','查询K线数据超时，请检查当前IP能否访问币安API','push','high','4qVvabr','close','add','2142TfErsb','computeMartingaleLabel','className','then','createElement','https://api.binance.com/api/v3/klines','#00da3c','查询K线数据异常，请检查当前IP能否访问币安API','long','toLocaleString','display','firstAmount','stopProfit','toISOString','USDT','\x20仓位:\x20','innerHTML','downloadKlineBtn','forEach','开仓\x20时间:\x20','仓位均价','computeMartingaleDialog','triggerDrop','.json','length','79812leLErY','send','2005300YuWhbt','startTime','\x20价格:\x20','\x20最终金额：','thead','加仓\x20时间:\x20','pow'];a0_0x57eb=function(){return _0x1b1dfa;};return a0_0x57eb();}function a0_0xe5a4(_0x1ed270,_0x4613dd){const _0x57ebc4=a0_0x57eb();return a0_0xe5a4=function(_0xe5a41,_0x24fc95){_0xe5a41=_0xe5a41-0x169;let _0x2ed6a7=_0x57ebc4[_0xe5a41];return _0x2ed6a7;},a0_0xe5a4(_0x1ed270,_0x4613dd);}function renderChart(_0x6beeac,_0x581eff,_0x4963c5,_0x163aa3){const _0x2d0461=a0_0x3de4e5;let _0x148448=echarts[_0x2d0461(0x195)](document[_0x2d0461(0x191)](_0x2d0461(0x186))),_0x5a6f70={'title':{'text':'马丁格尔策略收益曲线'},'tooltip':{'trigger':_0x2d0461(0x18d)},'dataset':{'source':_0x6beeac},'xAxis':{'type':'category','boundaryGap':![],'axisLine':{'onZero':![]}},'yAxis':[{'type':_0x2d0461(0x1c4),'scale':!![],'name':'价格','splitLine':{'show':!![]},'axisLine':{'show':!![]}},{'type':'value','scale':!![],'name':_0x2d0461(0x1d4),'position':_0x2d0461(0x17a),'axisLabel':{'show':!![]},'axisLine':{'show':!![]}}],'series':[{'type':'k','itemStyle':{'color0':'#ec0000','color':_0x2d0461(0x1a8),'borderColor0':_0x2d0461(0x16d),'borderColor':_0x2d0461(0x183)},'encode':{'x':_0x2d0461(0x1d1),'y':[_0x2d0461(0x17e),_0x2d0461(0x1a0),_0x2d0461(0x19e),_0x2d0461(0x1de)]},'yAxisIndex':0x0},{'type':_0x2d0461(0x16a),'name':_0x2d0461(0x1b6),'data':_0x581eff,'symbol':_0x2d0461(0x1ca),'symbolSize':0x3,'yAxisIndex':0x0},{'type':_0x2d0461(0x16a),'name':_0x2d0461(0x16b),'data':_0x4963c5,'symbol':_0x2d0461(0x1ca),'symbolSize':0x3,'yAxisIndex':0x0},{'type':'line','name':_0x2d0461(0x181),'smooth':!![],'data':_0x163aa3,'yAxisIndex':0x1}]};_0x148448[_0x2d0461(0x18c)](_0x5a6f70);}