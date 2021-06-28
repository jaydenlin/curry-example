const B = (x)=>{
   const flag = x;
   return (data)=>{
      console.log('B:先做');
      if(flag==='1') {
         console.log(`策略1: 處理 ${data}`);
      } else if(flag==='2'){
         console.log(`策略2: 處理 ${data}`);
      }
      console.log('B:後做');
   }
};

const A = (FX)=>{
   console.log('A:先做');
   FX('A的資料');
   console.log('A:後做');
}

A(B('1'));
//A(B('2'));

