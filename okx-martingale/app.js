const a0_0x5e3f46=a0_0x58bc;(function(_0x1936d4,_0x52e91e){const _0x2907b0=a0_0x58bc,_0x2315b2=_0x1936d4();while(!![]){try{const _0xc14d52=parseInt(_0x2907b0(0x1ab))/0x1*(parseInt(_0x2907b0(0x153))/0x2)+parseInt(_0x2907b0(0x17b))/0x3+-parseInt(_0x2907b0(0x171))/0x4*(parseInt(_0x2907b0(0x183))/0x5)+-parseInt(_0x2907b0(0x19b))/0x6*(-parseInt(_0x2907b0(0x19f))/0x7)+-parseInt(_0x2907b0(0x156))/0x8*(parseInt(_0x2907b0(0x19d))/0x9)+-parseInt(_0x2907b0(0x16c))/0xa*(parseInt(_0x2907b0(0x13d))/0xb)+parseInt(_0x2907b0(0x182))/0xc;if(_0xc14d52===_0x52e91e)break;else _0x2315b2['push'](_0x2315b2['shift']());}catch(_0x47e147){_0x2315b2['push'](_0x2315b2['shift']());}}}(a0_0x3f76,0xf1473));let apiUrl=a0_0x5e3f46(0x149),queryBtn=document['getElementById']('queryBtn'),downloadKlineBtn=document[a0_0x5e3f46(0x194)]('downloadKlineBtn'),closeKlineBtn=document['getElementById']('closeKlineBtn'),symbolSelect=document[a0_0x5e3f46(0x194)](a0_0x5e3f46(0x150)),intervalSelect=document[a0_0x5e3f46(0x194)](a0_0x5e3f46(0x187)),startTimeInput=document[a0_0x5e3f46(0x194)](a0_0x5e3f46(0x151)),endTimeInput=document[a0_0x5e3f46(0x194)]('endTime'),klineDialog=document[a0_0x5e3f46(0x194)](a0_0x5e3f46(0x17e)),klineTable=document['getElementById'](a0_0x5e3f46(0x18c)),positionSideSelect=document['getElementById']('positionSideSelect'),computeBtn=document[a0_0x5e3f46(0x194)](a0_0x5e3f46(0x158)),closeMartingaleBtn=document['getElementById']('closeMartingaleBtn'),computeMartingaleDialog=document[a0_0x5e3f46(0x194)](a0_0x5e3f46(0x186)),symbol=symbolSelect[a0_0x5e3f46(0x15c)],interval=intervalSelect['value'],startTime=new Date(startTimeInput[a0_0x5e3f46(0x15c)])['getTime'](),endTime=new Date(endTimeInput[a0_0x5e3f46(0x15c)])['getTime'](),positionSide=positionSideSelect[a0_0x5e3f46(0x15c)],klineData=[],currentStartTime=startTime,totalResults=0x0;symbolSelect[a0_0x5e3f46(0x197)]=function(){const _0x68c500=a0_0x5e3f46;symbol=symbolSelect[_0x68c500(0x15c)];},intervalSelect['onchange']=function(){interval=intervalSelect['value'];},startTimeInput['onchange']=function(){const _0x70e15=a0_0x5e3f46;startTime=new Date(startTimeInput[_0x70e15(0x15c)])[_0x70e15(0x160)]();},endTimeInput[a0_0x5e3f46(0x197)]=function(){const _0x32df8b=a0_0x5e3f46;endTime=new Date(endTimeInput['value'])[_0x32df8b(0x160)]();},positionSideSelect['onchange']=function(){positionSide=positionSideSelect['value'];},queryBtn['onclick']=function(){const _0x1fe8e4=a0_0x5e3f46;queryBtn['disabled']=!![],queryBtn['style']['backgroundColor']=_0x1fe8e4(0x169),query();},computeBtn[a0_0x5e3f46(0x173)]=function(){compute();};function a0_0x58bc(_0x4fc84c,_0x452b91){const _0x3f7689=a0_0x3f76();return a0_0x58bc=function(_0x58bc38,_0x352058){_0x58bc38=_0x58bc38-0x13d;let _0x1cde04=_0x3f7689[_0x58bc38];return _0x1cde04;},a0_0x58bc(_0x4fc84c,_0x452b91);}function query(){const _0x29722b=a0_0x5e3f46;klineData=[],currentStartTime=startTime,totalResults=0x0,klineTable[_0x29722b(0x1a4)]='',queryWithLimit(currentStartTime);}function queryWithLimit(_0x1cdc0a){const _0x480607=a0_0x5e3f46;let _0x211fc4=_0x480607(0x146)+symbol+_0x480607(0x143)+_0x480607(0x18b)+interval+'&startTime='+_0x1cdc0a+'&endTime='+endTime+'&limit=1000',_0x45f96c=setTimeout(()=>{const _0x84c5d1=_0x480607;alert(_0x84c5d1(0x176));},0x1388);fetch(apiUrl+_0x211fc4)[_0x480607(0x177)](function(_0x2fa1e2){const _0x27defd=_0x480607;return!_0x2fa1e2['ok']&&alert(_0x27defd(0x16b)),clearTimeout(_0x45f96c),_0x2fa1e2[_0x27defd(0x19e)]();})[_0x480607(0x177)](function(_0x4937c1){const _0x3f8765=_0x480607;totalResults+=_0x4937c1['length'],currentStartTime=_0x4937c1[_0x4937c1[_0x3f8765(0x162)]-0x1][0x0]+0x1,klineData=klineData[_0x3f8765(0x195)](_0x4937c1),localStorage[_0x3f8765(0x148)]('klineData',JSON[_0x3f8765(0x18e)](klineData));if(_0x4937c1[_0x3f8765(0x162)]<0x3e8){showKlineTable(0x1),klineDialog[_0x3f8765(0x141)]['display']=_0x3f8765(0x14a);return;}new Promise(_0xbc1aee=>{setTimeout(_0xbc1aee,0x3e8);})[_0x3f8765(0x177)](()=>{queryWithLimit(currentStartTime);});})[_0x480607(0x14d)](_0x33951b=>{const _0x59d19b=_0x480607;clearTimeout(_0x45f96c),alert(_0x59d19b(0x157)+_0x33951b[_0x59d19b(0x168)]);});}function showKlineTable(_0x1284c3){const _0x44e726=a0_0x5e3f46;klineTable[_0x44e726(0x1a4)]='';let _0xfabca2=0xa,_0x2dc9dd=(_0x1284c3-0x1)*_0xfabca2,_0x1dc1e3=_0x2dc9dd+_0xfabca2,_0x1c388a=klineData[_0x44e726(0x15b)](_0x2dc9dd,_0x1dc1e3),_0x57a8=document[_0x44e726(0x179)](_0x44e726(0x1ad));_0x57a8[_0x44e726(0x1a4)]=_0x44e726(0x17d),klineTable[_0x44e726(0x1a5)](_0x57a8);let _0x19c101=document['createElement']('tbody');console['log'](_0x1c388a),_0x1c388a['forEach'](function(_0x47ffec){const _0x59b487=_0x44e726;let _0x58e80a=document[_0x59b487(0x179)]('tr');_0x58e80a[_0x59b487(0x1a4)]='<td>'+new Date(_0x47ffec[0x0])[_0x59b487(0x15d)]()+_0x59b487(0x1a7)+_0x47ffec[0x1]+_0x59b487(0x1a7)+_0x47ffec[0x2]+_0x59b487(0x1a7)+_0x47ffec[0x3]+'</td><td>'+_0x47ffec[0x4]+_0x59b487(0x1a7)+_0x47ffec[0x5]+_0x59b487(0x1a7)+new Date(_0x47ffec[0x6])[_0x59b487(0x15d)]()+'</td><td>'+_0x47ffec[0x7]+'</td><td>'+_0x47ffec[0x8]+'</td><td>'+_0x47ffec[0x9]+_0x59b487(0x1a7)+_0x47ffec[0xa]+_0x59b487(0x1a7)+_0x47ffec[0xb]+'</td>',_0x19c101[_0x59b487(0x1a5)](_0x58e80a);}),klineTable[_0x44e726(0x1a5)](_0x19c101);let _0x3c352e=document['createElement'](_0x44e726(0x193));_0x3c352e[_0x44e726(0x142)]=_0x44e726(0x19a);let _0x552e1e=Math['ceil'](klineData[_0x44e726(0x162)]/_0xfabca2);for(let _0x5e47ac=0x1;_0x5e47ac<=_0x552e1e;_0x5e47ac++){let _0x341ca2=document[_0x44e726(0x179)]('a');_0x341ca2['href']='#',_0x341ca2[_0x44e726(0x142)]=_0x44e726(0x175),_0x341ca2[_0x44e726(0x147)]=_0x5e47ac+'',_0x341ca2[_0x44e726(0x16a)]('click',()=>showKlineTable(_0x5e47ac)),_0x5e47ac===_0x1284c3&&_0x341ca2[_0x44e726(0x1a6)][_0x44e726(0x16d)](_0x44e726(0x170)),_0x3c352e[_0x44e726(0x1a5)](_0x341ca2);}klineTable[_0x44e726(0x1a5)](_0x3c352e);}closeKlineBtn[a0_0x5e3f46(0x173)]=function(){const _0x1fba31=a0_0x5e3f46;klineDialog['style']['display']=_0x1fba31(0x17a);},closeMartingaleBtn['onclick']=function(){computeMartingaleDialog['style']['display']='none';},downloadKlineBtn['onclick']=function(){const _0x332643=a0_0x5e3f46;let _0x32ccac=symbol+'_'+interval+'.json',_0x143697=klineData['map'](function(_0x3a0d0b){return{'timestamp':_0x3a0d0b[0x0],'open':_0x3a0d0b[0x1],'high':_0x3a0d0b[0x2],'low':_0x3a0d0b[0x3],'close':_0x3a0d0b[0x4],'volume':_0x3a0d0b[0x5],'closeTime':_0x3a0d0b[0x6],'quoteAssetVolume':_0x3a0d0b[0x7],'numberOfTrades':_0x3a0d0b[0x8],'takerBuyBaseAssetVolume':_0x3a0d0b[0x9],'takerBuyQuoteAssetVolume':_0x3a0d0b[0xa],'ignore':_0x3a0d0b[0xb]};}),_0x448c44=document['createElement']('a');_0x448c44[_0x332643(0x185)]=_0x32ccac,_0x448c44[_0x332643(0x188)]=_0x332643(0x155)+encodeURIComponent(JSON[_0x332643(0x18e)](_0x143697,null,0x2)),_0x448c44['style'][_0x332643(0x16e)]='none',document['body'][_0x332643(0x1a5)](_0x448c44),_0x448c44[_0x332643(0x1aa)](),document['body'][_0x332643(0x19c)](_0x448c44);};function a0_0x3f76(){const _0x17953c=['stopProfit','category','setOption','div','getElementById','concat','总资金','onchange','axis','\x20仓位价格:\x20','page-links','18bAyXBf','removeChild','45hSsolq','json','1292389AvMdPv','baseAmount','#008F28','computeMartingaleLabel','pow','innerHTML','appendChild','classList','</td><td>','klineData','high','click','790723gsKBjs','open','thead','110198GdxrEL','parse','收益曲线','tradeFee','style','className','USDT','triggerDrop','priceMultiplier','?symbol=','innerText','setItem','https://api.binance.com/api/v3/klines','block','\x20价格:\x20','\x20总计投入保证金：','catch','#8A0000','long','symbolSelect','startTime','push','2xfoPlx','getItem','data:application/json;charset=utf-8,','1004008cuggYb','查询K线数据异常，请检查当前IP能否访问币安API\x20','computeBtn','maxAdditionCount','平仓\x20时间:\x20','slice','value','toLocaleString','toISOString','low','getTime','\x20收益：','length','close','computeMartingaleChart','马丁格尔策略收益曲线','date','forEach','message','gray','addEventListener','查询K线数据异常，请检查当前IP能否访问币安API','1940ktUGdH','add','display','\x20加仓次数:\x20','current','292FxBLeM','\x20收益率：','onclick','min','page-link','查询K线数据超时，请检查当前IP能否访问币安API','then','abs','createElement','none','1311804acZDeW','log','<tr><th>Time</th><th>Open</th><th>High</th><th>Low</th><th>Close</th><th>Volume</th><th>Close\x20Time</th><th>Quote\x20Asset\x20Volume</th><th>Number\x20of\x20Trades</th><th>Taker\x20Buy\x20Base\x20Asset\x20Volume</th><th>Taker\x20Buy\x20Quote\x20Asset\x20Volume</th><th>Ignore</th></tr>','klineDialog','#ec0000','firstAmount','right','21921852XXwBJd','3385CXXwkO','additionMultiplier','download','computeMartingaleDialog','intervalSelect','href','#00da3c','\x20仓位:\x20','&interval=','klineTable','\x20资金:\x20','stringify','开始执行马丁格尔策略'];a0_0x3f76=function(){return _0x17953c;};return a0_0x3f76();}function compute(){const _0x29043c=a0_0x5e3f46;console[_0x29043c(0x17c)](_0x29043c(0x18f));let _0x1a999e=document['getElementById'](_0x29043c(0x186));_0x1a999e['style'][_0x29043c(0x16e)]=_0x29043c(0x14a);let _0x25a9d6=parseFloat(document[_0x29043c(0x194)]('leverage')[_0x29043c(0x15c)]),_0x1c6c0a=parseFloat(document[_0x29043c(0x194)](_0x29043c(0x180))[_0x29043c(0x15c)]),_0x4c28fa=parseFloat(document['getElementById'](_0x29043c(0x1a0))[_0x29043c(0x15c)]),_0x78d9fc=parseFloat(document[_0x29043c(0x194)](_0x29043c(0x144))[_0x29043c(0x15c)]),_0x412935=parseFloat(document['getElementById'](_0x29043c(0x190))[_0x29043c(0x15c)]),_0x299d94=parseInt(document[_0x29043c(0x194)](_0x29043c(0x159))[_0x29043c(0x15c)]),_0x560605=parseFloat(document[_0x29043c(0x194)](_0x29043c(0x145))[_0x29043c(0x15c)]),_0x3c200c=parseFloat(document[_0x29043c(0x194)](_0x29043c(0x184))[_0x29043c(0x15c)]),_0x1f6a89=parseFloat(document['getElementById'](_0x29043c(0x140))[_0x29043c(0x15c)]),_0x5d9e01=JSON[_0x29043c(0x13e)](localStorage[_0x29043c(0x154)](_0x29043c(0x1a8))),_0x12862a=[];const _0x4241c8=0x8*0x3c*0x3c*0x3e8;for(let _0x26a4b6=0x0;_0x26a4b6<_0x5d9e01['length'];_0x26a4b6++){let _0x378deb=_0x5d9e01[_0x26a4b6];_0x12862a[_0x29043c(0x152)]({'date':new Date(parseFloat(_0x378deb[0x0])+_0x4241c8)[_0x29043c(0x15e)](),'open':parseFloat(_0x378deb[0x1]),'high':parseFloat(_0x378deb[0x2]),'low':parseFloat(_0x378deb[0x3]),'close':parseFloat(_0x378deb[0x4])});}let _0x402ba0=positionSide===_0x29043c(0x14f),_0x4efc54=0x0;_0x3c200c===0x1?_0x4efc54=_0x1c6c0a+_0x4c28fa*_0x3c200c:_0x4efc54=_0x1c6c0a+_0x4c28fa*(0x1-Math[_0x29043c(0x1a3)](_0x3c200c,_0x299d94))/(0x1-_0x3c200c);let _0x5ba5cc=0x0,_0x2ab935=_0x12862a[0x0][_0x29043c(0x163)],_0xc1efab=0x0,_0x5639b8=_0x12862a[0x0]['close'],_0xa54599=_0x402ba0?_0x2ab935*(0x1-_0x78d9fc):_0x2ab935*(0x1+_0x78d9fc),_0x313554=_0x402ba0?_0x2ab935*(0x1+_0x412935):_0x2ab935*(0x1-_0x412935),_0x3c90b0=_0x12862a[0x0][_0x29043c(0x163)],_0x150737=[];_0x12862a[_0x29043c(0x167)](_0x539b04=>{const _0x40480b=_0x29043c;let _0x3ef76e=(_0x402ba0?_0x539b04[_0x40480b(0x15f)]-_0x3c90b0:_0x3c90b0-_0x539b04['high'])/_0x3c90b0;_0x4efc54<Math[_0x40480b(0x178)](_0x5ba5cc)*(_0x402ba0?_0x2ab935-_0x539b04['low']:_0x539b04['high']-_0x2ab935)&&(_0x4efc54=0x0,_0x5ba5cc=0x0,_0xc1efab=0x0);if(_0xc1efab<_0x299d94&&_0x3ef76e<=-_0x78d9fc*Math['pow'](_0x560605,_0xc1efab)&&(_0x402ba0&&_0x5ba5cc>0x0||!_0x402ba0&&_0x5ba5cc<0x0)){let _0x2395e5=_0x25a9d6*_0x4c28fa*Math[_0x40480b(0x1a3)](_0x3c200c,_0xc1efab),_0x5567f7=_0x402ba0?_0x2395e5/_0x539b04[_0x40480b(0x163)]:-_0x2395e5/_0x539b04[_0x40480b(0x163)];_0x5ba5cc+=_0x5567f7,_0x4efc54-=_0x2395e5*_0x1f6a89,_0x2ab935=(_0x2ab935*Math[_0x40480b(0x178)](_0x5ba5cc)+_0x539b04[_0x40480b(0x163)]*Math[_0x40480b(0x178)](_0x5567f7))/Math[_0x40480b(0x178)](_0x5ba5cc+_0x5567f7),_0xc1efab++,_0x3c90b0=_0x539b04[_0x40480b(0x163)],_0xa54599=_0x402ba0?_0x5639b8*(0x1-_0x78d9fc*Math['pow'](_0x560605,_0xc1efab)):_0x5639b8*(0x1+_0x78d9fc*Math[_0x40480b(0x1a3)](_0x560605,_0xc1efab)),_0x313554=_0x402ba0?_0x2ab935*(0x1+_0x412935):_0x2ab935*(0x1-_0x412935),console[_0x40480b(0x17c)]('加仓\x20时间:\x20'+_0x539b04['date']+'\x20加仓次数:\x20'+_0xc1efab+'\x20价格:\x20'+_0x539b04['close']+_0x40480b(0x18a)+_0x5ba5cc+_0x40480b(0x199)+_0x2ab935+_0x40480b(0x18d)+_0x4efc54);}(_0x402ba0&&_0x5ba5cc>0x0&&_0x539b04[_0x40480b(0x1a9)]>=_0x313554||!_0x402ba0&&_0x5ba5cc<0x0&&_0x539b04[_0x40480b(0x15f)]<=_0x313554)&&(_0x4efc54+=_0x2ab935*Math['abs'](_0x5ba5cc)*_0x412935,_0x4efc54-=_0x2ab935*Math[_0x40480b(0x178)](_0x5ba5cc)*_0x1f6a89,_0x5ba5cc=0x0,_0x2ab935=_0x539b04[_0x40480b(0x163)],_0xc1efab=0x0,_0x5639b8=_0x539b04[_0x40480b(0x163)],_0x3c90b0=_0x539b04[_0x40480b(0x163)],_0xa54599=_0x402ba0?_0x2ab935*(0x1-_0x78d9fc):_0x2ab935*(0x1+_0x78d9fc),_0x313554=_0x402ba0?_0x2ab935*(0x1+_0x412935):_0x2ab935*(0x1-_0x412935),console['log'](_0x40480b(0x15a)+_0x539b04[_0x40480b(0x166)]+_0x40480b(0x16f)+_0xc1efab+'\x20价格:\x20'+_0x313554+_0x40480b(0x18a)+_0x5ba5cc+_0x40480b(0x199)+_0x2ab935+_0x40480b(0x18d)+_0x4efc54));if(_0x5ba5cc===0x0&&_0x4efc54>0.1){let _0x1acb3b=Math[_0x40480b(0x174)](_0x4efc54,_0x1c6c0a*_0x25a9d6);_0x5ba5cc=_0x402ba0?_0x1acb3b/_0x539b04[_0x40480b(0x163)]:-_0x1acb3b/_0x539b04[_0x40480b(0x163)],_0x4efc54-=_0x1acb3b*_0x1f6a89,_0x2ab935=_0x539b04[_0x40480b(0x163)],_0xc1efab=0x0,_0x3c90b0=_0x539b04[_0x40480b(0x163)],_0x5639b8=_0x539b04[_0x40480b(0x163)],_0xa54599=_0x402ba0?_0x2ab935*(0x1-_0x78d9fc):_0x2ab935*(0x1+_0x78d9fc),_0x313554=_0x402ba0?_0x2ab935*(0x1+_0x412935):_0x2ab935*(0x1-_0x412935),console['log']('开仓\x20时间:\x20'+_0x539b04[_0x40480b(0x166)]+_0x40480b(0x16f)+_0xc1efab+_0x40480b(0x14b)+_0x539b04[_0x40480b(0x163)]+_0x40480b(0x18a)+_0x5ba5cc+_0x40480b(0x199)+_0x2ab935+_0x40480b(0x18d)+_0x4efc54);}_0x150737[_0x40480b(0x152)](_0x4efc54);}),document[_0x29043c(0x194)](_0x29043c(0x1a2))['innerText']=_0x29043c(0x14c)+_0x150737[0x0]+'\x20最终金额：'+_0x4efc54+_0x29043c(0x161)+(_0x4efc54-_0x150737[0x0])+_0x29043c(0x172)+(_0x4efc54/_0x150737[0x0]-0x1)*0x64+'%',renderChart(_0x12862a,_0x150737),console[_0x29043c(0x17c)]('结束执行马丁格尔策略');}function renderChart(_0x199a04,_0x5e3ca3){const _0x2623ad=a0_0x5e3f46;let _0x982d94=echarts['init'](document[_0x2623ad(0x194)](_0x2623ad(0x164))),_0x1ce59e={'title':{'text':_0x2623ad(0x165)},'tooltip':{'trigger':_0x2623ad(0x198)},'dataset':{'source':_0x199a04},'xAxis':{'type':_0x2623ad(0x191),'boundaryGap':![],'axisLine':{'onZero':![]}},'yAxis':[{'type':_0x2623ad(0x15c),'scale':!![],'name':'价格','splitLine':{'show':!![]},'axisLine':{'show':!![]}},{'type':'value','scale':!![],'name':_0x2623ad(0x196),'position':_0x2623ad(0x181),'axisLabel':{'show':!![]},'axisLine':{'show':!![]}}],'series':[{'type':'k','itemStyle':{'color0':_0x2623ad(0x17f),'color':_0x2623ad(0x189),'borderColor0':_0x2623ad(0x14e),'borderColor':_0x2623ad(0x1a1)},'encode':{'x':_0x2623ad(0x166),'y':[_0x2623ad(0x1ac),'close','high',_0x2623ad(0x15f)]},'yAxisIndex':0x0},{'type':'line','name':_0x2623ad(0x13f),'smooth':!![],'data':_0x5e3ca3,'yAxisIndex':0x1}]};_0x982d94[_0x2623ad(0x192)](_0x1ce59e);}
