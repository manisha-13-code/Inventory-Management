import React from 'react'
import { Link } from 'react-router-dom';
import mainLogo from "../../assets/LogoInven.jpg";

const Footer = () => {
    return (
    <footer>
        <div className="flex flex-col bg-[#FFFFFF]">
			<div className="flex flex-col items-start self-stretch bg-[#F8F9FB] h-[372px] pt-[62px]">
				<div className="flex justify-between items-center self-stretch mb-[33px] ml-[632px] mr-[645px]">
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Zrjseaf/VYxyRFb44_8LJa27GrpN.png"} 
						className="w-[71px] h-[50px] object-fill"
					/>
					<span className="text-[#617AA8] text-[14px] font-bold" >
						{"TrackEase"}
					</span>
				</div>
				<div className="flex justify-between items-center self-stretch mb-[39px] ml-[530px] mr-[530px]">
					<span className="text-[#3D4246] text-[14px] font-bold" >
						{"Home"}
					</span>
					<span className="text-[#33363B] text-[20px]" >
						{"About"}
					</span>
					<span className="text-[#3F4247] text-[20px]" >
						{"Service"}
					</span>
					<span className="text-[#2E3337] text-[14px] font-bold" >
						{"Contact Us"}
					</span>
				</div>
				<div className="flex justify-between items-center self-stretch mb-[43px] ml-[614px] mr-[632px]">
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Zrjseaf/vNTFOSWAQ5L%2BBwKyEgSs.png"} 
						className="w-[30px] h-[29px] object-fill"
					/>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Zrjseaf/OU322MQACND_BauhSCWX.png"} 
						className="w-[31px] h-[31px] object-fill"
					/>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Zrjseaf/PJyfkoqy3i76_2KWYYRU.png"} 
						className="w-[38px] h-[30px] object-fill"
					/>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Zrjseaf/Ot3XypJAxP8D6Wrg7g_w.png"} 
						className="w-[32px] h-[30px] object-fill"
					/>
				</div>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Zrjseaf/r_1CT19KMoM_PX_RBw5I.png"} 
					className="w-[10px] h-[8px] mb-[42px] ml-[103px] object-fill"
				/>
				<span className="text-[#F4F5F7] text-[20px] font-bold ml-[604px]" >
					{"Copyright studio "}
				</span>
			</div>
		</div>
    </footer>
    );
  };

  

export default Footer
