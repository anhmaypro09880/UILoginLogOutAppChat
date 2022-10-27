import "./messenger.css";
import { Link } from "react-router-dom";

import Conversation from "../../components/conversations/Conversation";
import Conversationtb from "../../components/conversations/conversationtopbar";
import Message from "../../components/message/Message";
import Messageown from "../../components/message/Messageown";

import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { io } from "socket.io-client";
import { Search } from "@material-ui/icons";






export default function Messenger() {
 

  return (
    <>
      
      <div className="messenger">
      <div className="chatOnline">
          <div className="chatOnlineWrapper">
          <div className="topbarLeft">
          <Link >
          <img
            src={
              "https://luv.vn/wp-content/uploads/2021/12/hinh-anh-gai-mat-vuong-xinh-dep-42.jpg"
            }
            alt=""
            className="topbarImg"
          />
          </Link>
        
          </div>
            <div className="divimg"><img src="https://cdn-icons-png.flaticon.com/512/919/919904.png" alt="" className="iconleftmenu"/></div>
            <div className="divimg"><img src="https://img.icons8.com/ios/452/call-list.png" alt="" className="iconleftmenu"/></div>
            <div className="divimg"><img src="https://img.icons8.com/ios/452/today.png" alt="" className="iconleftmenu"/></div>
            <div className="divimg"><img src="https://img.icons8.com/ios/452/video-call.png" alt="" className="iconleftmenu"/></div>
            <div className="spacemenuleft"></div>
            <div className="divimg"><img src="https://img.icons8.com/ios/452/business.png" alt="" className="iconleftmenu"/></div>
            <div className="divimg"><img src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/452/external-setting-essential-element-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png" alt="" className="iconleftmenu"/></div>
            
          </div>
        </div>
        
        <div className="chatMenu">
        <div className="chatMenuWrapper2">
        <div className="searchbar2">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="chatMenuInput"
          />
        </div>
        <div className="topbarIconItem">
            <img src="https://cdn-icons-png.flaticon.com/512/748/748137.png" className="iconuser" />
            
          </div>
          <div className="topbarIconItem">
            <img src="https://cdn-icons-png.flaticon.com/512/1387/1387940.png" className="icongroup" />
            
          </div>
        </div>
        <div className="menuNhom"><p className="nhom">All</p><p className="nhom">Group</p></div>
          <div className="chatMenuWrapper">
         
           
            
              <div className="conversation" >
                <Conversation  />
                
                
                
              </div>
              <div className="conversation" >
                <Conversation  />
                
                
                
              </div>
              <div className="conversation" >
                <Conversation  />
                
                
                
              </div>
              
            
            
          </div>
        </div>
        <div className="chatBox">
          <div className="topbarchat">
              <div className="conversation" >
                <Conversationtb  />
                
                
                
              </div>
              <div className="topbarIconItem">
              <img src="https://cdn-icons-png.flaticon.com/512/1387/1387940.png" className="icongroup" />
            
              </div>
              <div className="topbarIconItem">
              <img src="https://img.icons8.com/material-outlined/344/video-call.png" className="iconcall" />
            
              </div>
          </div>
          <div className="chatBoxWrapper">
                
                <div className="chatBoxTop">
                  
                    <div >
                      <Message  />
                      <Messageown  />
                    </div>
                 
                </div>
                <div className="chatBoxBottom">
                  <div className="inputmess">
                  <div className="topbarIconItem">
                  <img src="https://img.icons8.com/ios/344/smiling.png" className="iconsmile" />
            
                  </div>
                    <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    
                    
                  ></textarea>
                  </div>
                  
                  <button className="chatSubmitButton" >
                    Send
                  </button>
                </div>
              
           
          </div>
        </div>
        
      </div>
    </>
  );
}
