// 1. Install dependencies DONE
// 2. Import dependencies DONE
// 3. Setup webcam and canvas DONE
// 4. Define references to those DONE
// 5. Load handpose DONE
// 6. Detect function DONE
// 7. Drawing utilities DONE
// 8. Draw functions DONE

import React, { useRef } from "react";
// import logo from './logo.svg';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import "./App.css";
import { drawHand } from "./utilities";

function App() 
{
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  var btn_group=document.createElement('div')
  btn_group.setAttribute('class','btn_group');
 // document.body.appendChild(btn_group);
  
  var ring_btn1=document.createElement("BUTTON");
  ring_btn1.innerHTML="Ring1";
  ring_btn1.setAttribute('id','ring_btn1')
  ring_btn1.setAttribute('class','btn');
  document.body.appendChild(ring_btn1);
  


 
  var ring_btn2=document.createElement("BUTTON");
  ring_btn2.innerHTML="Ring2";
  ring_btn2.setAttribute('class','btn');
  ring_btn2.setAttribute('id','ring_btn2');
  document.body.appendChild(ring_btn2);
  
  var ring_btn3=document.createElement("BUTTON");
  ring_btn3.innerHTML="Ring3";
  ring_btn3.setAttribute('id','ring_btn3');
  ring_btn3.setAttribute('class','btn');
  document.body.appendChild(ring_btn3);

  var brclet_btn1=document.createElement("BUTTON");
  brclet_btn1.innerHTML="bracelet1";
  brclet_btn1.setAttribute('id','brclet_btn1');
  brclet_btn1.setAttribute('class','btn');
  document.body.appendChild(brclet_btn1);

  var brclet_btn2=document.createElement("BUTTON");
  brclet_btn2.innerHTML="bracelet2";
  brclet_btn2.setAttribute('class','btn');
  brclet_btn2.setAttribute('id','brclet_btn2')
  document.body.appendChild(brclet_btn2);

  console.log(this);
  var ring=new Image();
  ring.setAttribute('src','https://ashish7777777.github.io/Ring/ring4.png');
  
  var back_ring=new Image();
  back_ring.setAttribute('src','https://ashish7777777.github.io/Ring/back_ring4.png');

  var brclet= new Image();
  brclet.setAttribute('src',"https://ashish7777777.github.io/bracelet/bracelet1.png");

  var back_brclet= new Image();
  back_brclet.setAttribute('src',"https://ashish7777777.github.io/bracelet/back_bracelet1.png");



  const runHandpose = async () => 
  {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => 
    {
      detect(net);
    }, 100);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {

      



      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections 
      const hand = await net.estimateHands(video);
      console.log(hand);

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx,ring_btn1,ring_btn2,ring_btn3,brclet_btn1,brclet_btn2,ring,back_ring,brclet,back_brclet);
    }
  };

  runHandpose();

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          style={{
            position: "fixed",
            marginLeft: "10px",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
          }}
        />

        <canvas className="Canvas"
          ref={canvasRef}
          style={ {
            position: "fixed",
            marginLeft: "10px",
            marginRight: "auto",
            left: 0,
            right: 0,
           textAlign: "center",
            zindex: 9,
          }
        }
        />
      </header>
    </div>
  );
}

export default App;
