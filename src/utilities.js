// Points for fingers
const fingerJoints = {
  thumb: [0, 1, 2, 3, 4],
  indexFinger: [0, 5, 6, 7, 8],
  middleFinger: [0, 9, 10, 11, 12],
  ringFinger: [0, 13, 14, 15, 16],
  pinky: [0, 17, 18, 19, 20],
};

// Infinity Gauntlet Style
const style = {
  0: { color: "black", size: 15 },
  1: { color: "gold", size: 6 },
  2: { color: "green", size: 10 },
  3: { color: "gold", size: 6 },
  4: { color: "gold", size: 6 },
  5: { color: "purple", size: 10 },
  6: { color: "gold", size: 6 },
  7: { color: "gold", size: 6 },
  8: { color: "gold", size: 6 },
  9: { color: "blue", size: 10 },
  10: { color: "gold", size: 6 },
  11: { color: "gold", size: 6 },
  12: { color: "gold", size: 6 },
  13: { color: "red", size: 10 },
  14: { color: "black", size: 6 },
  15: { color: "gold", size: 6 },
  16: { color: "gold", size: 6 },
  17: { color: "orange", size: 10 },
  18: { color: "gold", size: 6 },
  19: { color: "gold", size: 6 },
  20: { color: "gold", size: 6 },
};

// Drawing function
export const drawHand = (predictions, ctx,ring_btn1,ring_btn2,ring_btn3,brclet_btn1,brclet_btn2,ring,back_ring,wrist,back_wrist) => 
{
  // Check if we have predictions
  if (predictions.length > 0) 
  {
    // Loop through each prediction
    predictions.forEach((prediction) => {
      // Grab landmarks
      const landmarks = prediction.landmarks;

      // Loop through fingers
      for (let j = 0; j < Object.keys(fingerJoints).length; j++) {
        let finger = Object.keys(fingerJoints)[j];
        //  Loop through pairs of joints
        for (let k = 0; k < fingerJoints[finger].length - 1; k++) {
          // Get pairs of joints
          const firstJointIndex = fingerJoints[finger][k];
          const secondJointIndex = fingerJoints[finger][k + 1];

          // Draw path
          ctx.beginPath();
          ctx.moveTo(
            landmarks[firstJointIndex][0],
            landmarks[firstJointIndex][1]
          );
          ctx.lineTo(
            landmarks[secondJointIndex][0],
            landmarks[secondJointIndex][1]
          );
          ctx.strokeStyle = "plum";
          ctx.lineWidth = 4;
          //ctx.stroke();
        }
      }
      


      ring_btn1.onclick=function ChangeSrc1()
      {
        //var ring= new Image();
        ring.setAttribute('src','https://ashish7777777.github.io/Ring/ring4.png');
        back_ring.setAttribute('src','https://ashish7777777.github.io/Ring/back_ring4.png');
      
      };
      ring_btn2.onclick=function ChangeSrc2()
      {
        ring.setAttribute('src','https://ashish7777777.github.io/Ring/ring1.png');
        back_ring.setAttribute('src','https://ashish7777777.github.io/Ring/back_ring1.png');

      };
      ring_btn3.onclick=function ChangeSrc3()
      {
        ring.setAttribute('src','https://ashish7777777.github.io/Ring/ring5.png');
        back_ring.setAttribute('src','https://ashish7777777.github.io/Ring/back_ring5.png');

      };

      brclet_btn1.onclick=function ChangeSrc4()
      {
        //var ring= new Image();
        wrist.setAttribute('src','https://ashish7777777.github.io/bracelet/bracelet1.png');
        back_wrist.setAttribute('src','https://ashish7777777.github.io/bracelet/back_bracelet1.png');

      
      };

      brclet_btn2.onclick=function ChangeSrc5()
      {
        //var ring= new Image();
        wrist.setAttribute('src','https://ashish7777777.github.io/bracelet/bracelet3.png');
        back_wrist.setAttribute('src','https://ashish7777777.github.io/bracelet/back_bracelet3.png');
      
      };

  
      try
      {
      //console.log(ring.src);
      }
      catch(e)
      {
        ;
      }
      //wrist.setAttribute('src','https://restcountries.eu/data/afg.svg');
      var RingfingerX=landmarks[13][0];
      var RingfingerY=landmarks[13][1];
      var RingfingerUpperJointX=landmarks[14][0];
      var RingfingerUpperJointY=landmarks[14][1];
      var PinkyfingerX=landmarks[17][0];
      var PinkyfingerY=landmarks[17][1];
      var back_of_the_hand=true;

      var finger_angle_in_radian=Math.atan((RingfingerUpperJointY - RingfingerY )/(RingfingerUpperJointX- RingfingerX ));


      var angle_of_pinkyfinger=Math.atan((PinkyfingerY- landmarks[0][1] )/(PinkyfingerX- landmarks[0][0] ));
      var angle_of_midfinger=Math.atan((landmarks[9][1]-landmarks[0][1])/(landmarks[9][0]-landmarks[0][0]));


      if(landmarks[0][0]-PinkyfingerX<0)
      { 
        angle_of_pinkyfinger+=(Math.PI);

      }
      if(landmarks[0][0]-landmarks[9][0]<0)
      {
        angle_of_midfinger+=(Math.PI);
      }

      if(angle_of_pinkyfinger- angle_of_midfinger>0)
      {
        back_of_the_hand=false;
      }
      else
      {
        back_of_the_hand=true;
      }


      //console.log(angle_of_pinkyfinger);      
      
      var dist_btwen_indexfing_ringfing=Math.sqrt(Math.pow((landmarks[5][0]-landmarks[13][0]),2)+Math.pow((landmarks[5][1]-landmarks[13][1]),2));
      var dist_btwen_Ringfinger_RingfingerUpperJoint=Math.sqrt(Math.pow((RingfingerX-RingfingerUpperJointX),2)+Math.pow((RingfingerY-RingfingerUpperJointY),2));
      var AspectRatio_of_ring=dist_btwen_indexfing_ringfing*0.12/(120);   
      var dist_btwen_Ringfing_wrist=Math.sqrt( Math.pow ( ( RingfingerX - landmarks[0][0] ) , 2 ) + Math.pow( ( RingfingerY - landmarks[0][1]) , 2 ) );
      var AspectRatio_of_Wrist=dist_btwen_Ringfing_wrist/450;









      if(RingfingerUpperJointX-RingfingerX>0)
      {
        finger_angle_in_radian=-finger_angle_in_radian;
      }
      else
      {
        finger_angle_in_radian=Math.PI+(-finger_angle_in_radian);
      }

      ctx.save();
      ctx.translate(landmarks[14][0],landmarks[14][1]);
      ctx.rotate((Math.PI/2 - finger_angle_in_radian));

      if(dist_btwen_indexfing_ringfing>30)
      { 
        if(back_of_the_hand==true)
        {
          ctx.drawImage(ring,-ring.width*(AspectRatio_of_ring)/2,(-ring.height*(AspectRatio_of_ring)/2)+(0.4*dist_btwen_Ringfinger_RingfingerUpperJoint),ring.width*AspectRatio_of_ring,ring.height*AspectRatio_of_ring);  
        } 
        else
        {         
          ctx.drawImage(back_ring,-ring.width*(AspectRatio_of_ring)/2,(-ring.height*(AspectRatio_of_ring)/2)+(0.4*dist_btwen_Ringfinger_RingfingerUpperJoint),ring.width*AspectRatio_of_ring,ring.height*AspectRatio_of_ring);       
        }
      }
      ctx.restore();
      


      //calculating angle......
      var wristX=landmarks[0][0];
      var wristY=landmarks[0][1];
      var middleFingerX=landmarks[9][0];
      var middleFingerY=landmarks[9][1];
      var angle_in_radian=Math.atan((RingfingerY - wristY )/(RingfingerX- wristX ));
      var angle_in_degree=(angle_in_radian*180/Math.PI);
      if(RingfingerX - wristX>0)
      {
        angle_in_radian=-angle_in_radian;
      }
         
      else
      {
        angle_in_radian=1*Math.PI+(-angle_in_radian);
      }

      ctx.save();
      ctx.translate(landmarks[0][0],landmarks[0][1]);
     // ctx.rotate(-((Math.PI/2)-angle_in_radian));
      ctx.rotate((Math.PI/2 - angle_in_radian));

      if(back_of_the_hand==true)
      {
        ctx.drawImage(back_wrist,-wrist.width*AspectRatio_of_Wrist/2,-wrist.height*AspectRatio_of_Wrist/2+(0.3*dist_btwen_Ringfing_wrist) ,wrist.width*AspectRatio_of_Wrist,wrist.height*AspectRatio_of_Wrist);          
        console.log("zzzzzzzzzzzzz");
      }
      else
      {
        ctx.drawImage(wrist,-wrist.width*AspectRatio_of_Wrist/2,-wrist.height*AspectRatio_of_Wrist/2+(0.3*dist_btwen_Ringfing_wrist) ,wrist.width*AspectRatio_of_Wrist,wrist.height*AspectRatio_of_Wrist);  
      }
      
      ctx.restore();
      // Loop through landmarks and draw em
      for (let i = 1; i < landmarks.length; i++) {
        // Get x point
        const x = landmarks[i][0];
        // Get y point
        const y = landmarks[i][1];
        // Start drawing
        ctx.beginPath();
        ctx.arc(x, y, style[i]["size"], 0, 3 * Math.PI);
        // Set line color
        ctx.fillStyle = style[i]["color"];
        //ctx.fill();
      }
       /* let model = document.createElement('x-model');
        model.setAttribute('src','LeePerrySmith.obj');
        model.setAttribute('id','abc');

        model.style.width="200px";
        model.style.height="200px";
        model.style.position="absolute";
        model.style.trasform="translateZ(-200px) rotateZ(40deg)";*/

    });
  }
};
