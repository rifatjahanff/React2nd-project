

import './App.css'
import Button from './components/Button'
import Image from './components/Image'
import Heading from './components/Heading'
import Menu from './components/Menu'
import Flex from './components/Flex'
import Container from './components/Container'
import logo from './assets/Logo.png'
import banner from './assets/Group 168.png'
import BenefitsOne from './assets/BenefitsOne.png'
import BenefitsTwo from './assets/BenefitsTwo.png'
import BenefitsThree from './assets/BenefitsThree.png'
import BenefitsFour from './assets/BenefitsFour.png'
import Ensure from './assets/Ensure.png'
import CourseOne from './assets//CourseOne.png'
import CourseTwo from './assets/CourseTwo.png'
import CourseThree from './assets/CourseThree.png'
import CourseFour from './assets/CourseFour.png'
import CourseFive from './assets/CourseFive.png'
import CourseSix from './assets/CourseSix.png'
import Star from './assets/star.png'
import Coma from './assets/comma_filled_icon.png'
import One from './assets/Group1.png'
import Two from './assets/Group2.png'
import Three from './assets/Group3.png'
import FooterLogo from './assets/Footerpng.png'
import FooterIcon from './assets/Footer_icon.png'



function App() {
 

  return (
    <>
  {/* Navebar start */}
 
    <section className="">
    <Container >
    <Flex className={"justify-end"}>
    <div className="w-[15%] mt-[25px]">
      <Image imgsrc={logo}/>
    </div>


    <div className="w-[60%] ">
    <Flex className={"justify-end"}>
    <Menu menuName={"Home"} className={"px-[30px] text-[25px] mt-[30px] hover:text-[#327186] duration-500"}/>
    <Menu menuName={"Curse"} className={"px-[30px] text-[25px] mt-[30px] hover:text-[#327186] duration-500"}/>
    <Menu menuName={"Monitor"} className={"px-[30px] text-[25px] mt-[30px] hover:text-[#327186] duration-500"}/>
    <Menu menuName={"About"} className={"px-[30px] text-[25px] mt-[30px] hover:text-[#327186] duration-500"}/>
    
    </Flex >
    </div>
    <div className="w-[25%] flex justify-end">
      <Button btnSrc={"Get started"}  className={" px-[40px] text-[25px] mt-[20px]  py-[10px] bg-[#F5C362] hover:bg-[#327186] duration-500  hover:text-white rounded-lg "}/>
    </div>
    </Flex>
    </Container>
    </section>
     {/* Navebar end */}

      {/* Banner part start */}
    <section >
      <Container>
        <Flex>
          <div className=" w-1/2">
          <Heading text="Getting Quality Education is now more Easy" className={" text-[40px] mt-[250px] mb-[30px] font-bold pr-[250px]"}/>
          <Heading text="t is a long established fact that a reader will be distracted by the readable content of a page when looking  " className={" text-[20px] mb-[150px] pr-[250px]"}/>
          <Button btnSrc={"Get started"}  className={" px-[30px] text-[25px] mt-[20px] mr-[20px]  py-[10px] border bg-[#F5C362] hover:bg-[#327186] duration-500  hover:text-white rounded-2xl "}/>
          <Button btnSrc={"Get started"}  className={" px-[30px] text-[25px] mt-[20px]  py-[10px] border border-sky-500 hover:bg-[#F5C362] hover:border-[#F5C362] duration-500  hover:text-white rounded-2xl "}/>
          </div>
          <div className=" w-1/2 mt-[150px] mb-[150px]">
          <Image imgsrc={banner}/>
          </div>
        </Flex>
      </Container>
    </section>
    {/* Banner part end */}
    
     {/*Quantity part start */}
    <section>
      <div className="h-[250px] bg-[#0166FF] ">
      <Container>
        <Flex className={"justify-between"}>
          <div className="">
            <Heading text={"8200"} className=" text-white font-bold text-[30px] mt-[60px]" />
            <Heading text={"Success Stories"} className=" text-white text-[30px] mt-4" />

          </div>
          <div className=" w-[2px] h-[130px] bg-white ml-11 mt-[60px]"></div>
          <div className="">
            <Heading text={"12200 "} className=" text-white font-bold text-[30px] mt-[60px]" />
            <Heading text={"Expert Mentors"} className=" text-white text-[30px] mt-4" />

          </div>
          <div className=" w-[2px] h-[130px] bg-white ml-11 mt-[60px]"></div>
          <div className="">
            <Heading text={"50000"} className=" text-white font-bold text-[30px] mt-[60px]" />
            <Heading text={" Hours  Course"} className=" text-white text-[30px] mt-4" />

          </div>
          <div className=" w-[2px] h-[130px] bg-white ml-11 mt-[60px]"></div>
          <div className="">
            <Heading text={"70000"} className=" text-white font-bold text-[30px] mt-[60px]" />
            <Heading text={"Active Student"} className=" text-white text-[30px] mt-4" />

          </div> 
        </Flex>
      </Container>
      </div>
    </section>
    {/*Quantity part End */}

    {/* Benefits part start   */}

    <section className={"py-[150px]"}>
      <Container className={"text-center"}>
      <Heading text={"Benefits of online Education  "} className=" font-bold text-[50px] "/>
      <Heading text={"Benefits of online Education  It is a long established fact that a reader will be distracted by the readable content of a page when looking  "} className=" text-[20px] px-[250px] mt-8"/>
      </Container>
    </section>

    <section className={"pb-[100px]"}>
      <Container>
        <Flex className={"justify-between"}>
          <div className="w-[25%] p-[20px] rounded-xl bg-[rgba(245,245,244,0.96)]"> 
          <Image imgsrc={BenefitsOne}/>
          <Heading text={"One on One Monitor  "} className=" font-bold text-[29px] "/>
          <Heading text={"Lorem Ipsum is simply dummy text of the printing and typesetting"} className=" mt-[20px] text-[20px] pr-[50px] "/>
          
          </div>
          <div className="w-[23%] p-[20px] rounded-xl bg-[rgba(245,245,244,0.96)]"> 
          <Image imgsrc={BenefitsTwo}/>
          <Heading text={"24/7 Mentor "} className=" font-bold text-[29px] "/>
          <Heading text={"Lorem Ipsum is simply dummy text of the printing and typesetting"} className=" mt-[20px] text-[20px] pr-[50px] "/>
          
          </div>
          <div className="w-[23%] p-[20px] rounded-xl bg-[rgba(245,245,244,0.96)]"> 
          <Image imgsrc={BenefitsThree}/>
          <Heading text={"Whiteboard"} className=" font-bold text-[29px] "/>
          <Heading text={"Lorem Ipsum is simply dummy text of the printing and typesetting"} className=" mt-[20px] text-[20px] pr-[50px] "/>
          
          </div>
          <div className="w-[23%] p-[20px] rounded-xl bg-[rgba(245,245,244,0.96)]"> 
          <Image imgsrc={BenefitsFour}/>
          <Heading text={"Affordable Price"} className=" font-bold text-[29px] "/>
          <Heading text={"Lorem Ipsum is simply dummy text of the printing and typesetting"} className=" mt-[20px] text-[20px] pr-[50px] "/>
          
          </div>
        </Flex>
      </Container>
    </section>
    {/* Benefits part end  */}

    {/* Ensure part start */}
    <section className=" py-[150px]">
      <Container>
        <Flex>
          <div className=" w-[50%] ">
          <Image imgsrc={Ensure}/>
          </div>
          <div className=" w-[50%] ml-[100px]">
          
          <Heading text="We are Always Ensure Best Course for your learning" className={" text-[40px] mt-[50px] font-bold pr-[150px]"}/>
          <Heading text="t is a long established fact that a reader will be distracted by the readable content of a page when looking  " className={" text-[20px] my-50px] "}/>
          <Button btnSrc={"Get started"}  className={" px-[30px] text-[25px] mt-[20px] mr-[20px]  py-[10px] border bg-[#F5C362] hover:bg-[#327186] duration-500  hover:text-white rounded-2xl "}/>
          
          
          </div>
        </Flex>
      </Container>
    </section>
    {/* Ensure part end */}

    {/* Popular Course part start */}
    <section className={"pb-[150px]"}>
      <Container className={"text-center"}>
      <Heading text={"Our Popular Course  "} className=" font-bold text-[50px] "/>
      <Heading text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been th "} className=" text-[20px] px-[390px] mt-8 p"/>
      </Container>
    </section>
    <section className={"py-[50px]"}>
      <Container>
        <Flex className={"flex-wrap justify-between gap-y-[20px]"}>
          <div className=" w-[32%] bg-[rgba(245,245,244,0.96)] h-[500px] rounded-xl text-center">
          <Image imgsrc={CourseOne}/>
          <Heading text={"Web Design  Basic to advance"} className=" font-bold text-[20px] mt-[30px]"/>
          <Flex className={"mt-[30px] ml-[75px]"}>
          <div className=" h-[40px] w-[120px] "><Image imgsrc={Star}/></div>
          <Heading text={"5.0 (2 rating)"} className=" text-[20px] ml-[30px] text-[#6A6B6C]"/>
          </Flex>
          <Button btnSrc={"Add to Cart"}  className={" px-[40px] text-[25px] mt-[20px]  py-[10px] border border-sky-500 hover:bg-[#F5C362] hover:border-[#F5C362] duration-500  hover:text-white rounded-2xl "}/>
          </div>

          <div className=" w-[32%] bg-[rgba(245,245,244,0.96)] h-[500px] rounded-xl text-center">
          <Image imgsrc={CourseTwo}/>
          <Heading text={"Web development  Basic to advance"} className=" font-bold text-[20px] mt-[30px]"/>
          <Flex className={"mt-[30px] ml-[75px]"}>
          <div className=" h-[40px] w-[120px] "><Image imgsrc={Star}/></div>
          <Heading text={"5.0 (2 rating)"} className=" text-[20px] ml-[30px] text-[#6A6B6C]"/>
          </Flex>
          <Button btnSrc={"Add to Cart"}  className={" px-[40px] text-[25px] mt-[20px]  py-[10px] border border-sky-500 hover:bg-[#F5C362] hover:border-[#F5C362] duration-500  hover:text-white rounded-2xl "}/>
          </div>

          <div className=" w-[32%] bg-[rgba(245,245,244,0.96)] h-[500px] rounded-xl text-center">
          <Image imgsrc={CourseThree}/>
          <Heading text={"Digital marketing  Basic to advance"} className=" font-bold text-[20px] mt-[30px]"/>
          <Flex className={"mt-[30px] ml-[75px]"}>
          <div className=" h-[40px] w-[120px] "><Image imgsrc={Star}/></div>
          <Heading text={"5.0 (2 rating)"} className=" text-[20px] ml-[30px] text-[#6A6B6C]"/>
          </Flex>
          <Button btnSrc={"Add to Cart"}  className={" px-[40px] text-[25px] mt-[20px]  py-[10px] border border-sky-500 hover:bg-[#F5C362] hover:border-[#F5C362] duration-500  hover:text-white rounded-2xl "}/>
          </div>

          <div className=" w-[32%] bg-[rgba(245,245,244,0.96)] h-[500px] rounded-xl text-center">
          <Image imgsrc={CourseFour}/>
          <Heading text={"App Design  Basic to advance"} className=" font-bold text-[20px] mt-[30px]"/>
          <Flex className={"mt-[30px] ml-[75px]"}>
          <div className=" h-[40px] w-[120px] "><Image imgsrc={Star}/></div>
          <Heading text={"5.0 (2 rating)"} className=" text-[20px] ml-[30px] text-[#6A6B6C]"/>
          </Flex>
          <Button btnSrc={"Add to Cart"}  className={" px-[40px] text-[25px] mt-[20px]  py-[10px] border border-sky-500 hover:bg-[#F5C362] hover:border-[#F5C362] duration-500  hover:text-white rounded-2xl "}/>
          </div>

          <div className=" w-[32%] bg-[rgba(245,245,244,0.96)] h-[500px] rounded-xl text-center">
          <Image imgsrc={CourseFive}/>
          <Heading text={"Mobile design  Basic to advance"} className=" font-bold text-[20px] mt-[30px]"/>
          <Flex className={"mt-[30px] ml-[75px]"}>
          <div className=" h-[40px] w-[120px] "><Image imgsrc={Star}/></div>
          <Heading text={"5.0 (2 rating)"} className=" text-[20px] ml-[30px] text-[#6A6B6C]"/>
          </Flex>
          <Button btnSrc={"Add to Cart"}  className={" px-[40px] text-[25px] mt-[20px]  py-[10px] border border-sky-500 hover:bg-[#F5C362] hover:border-[#F5C362] duration-500  hover:text-white rounded-2xl "}/>
          </div>

          <div className=" w-[32%] bg-[rgba(245,245,244,0.96)] h-[500px] rounded-xl text-center">
          <Image imgsrc={CourseSix}/>
          <Heading text={"Graphics Design  Basic to advance"} className=" font-bold text-[20px] mt-[30px]"/>
          <Flex className={"mt-[30px] ml-[75px]"}>
          <div className=" h-[40px] w-[120px] "><Image imgsrc={Star}/></div>
          <Heading text={"5.0 (2 rating)"} className=" text-[20px] ml-[30px] text-[#6A6B6C]"/>
          </Flex>
          <Button btnSrc={"Add to Cart"}  className={" px-[40px] text-[25px] mt-[20px]  py-[10px] border border-sky-500 hover:bg-[#F5C362] hover:border-[#F5C362] duration-500  hover:text-white rounded-2xl "}/>
          </div>

        </Flex>
      </Container>
    </section>
    <Container className="text-center mb-[150px]">
    <Button btnSrc={"Get started"}  className={" px-[30px] text-[25px] mt-[20px]  py-[10px] bg-[#F5C362] hover:bg-[#F5C362] hover:border-[#F5C362] duration-500  hover:text-white rounded-2xl "}/>
    </Container>

    {/* Popular Course part end */}

    {/* Revew part start */}
    <section>
      <Container className="text-center mb-[150px]">
      <Heading text={"What our Students say"} className=" font-bold text-[50px] "/>
      <Heading text={"There are many variations of passages of Lorem Ipsum available,"} className=" text-[20px] px-[390px] mt-8 p"/>
      </Container>

      <Container>
       <Flex className="justify-between">
       <div className=" w-[32%] h-[450px] bg-[rgba(245,245,244,0.96)] rounded-xl mb-[150px]">
       <div className="ml-[40px]">
       <Heading text={"Web Design  Basic to advance"} className=" font-bold text-[20px] mt-[40px]"/>
       <Image imgsrc={Coma}/>
       <Heading text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took " className={" text-[20px] pr-[49px]"}/>
       </div>
       <div className="h-[2px] w-[300px] bg-[#B1B3B6] mt-[50px] text-center ml-[60px]"> </div>
       <div className="ml-[40px] mt-[30px]">
       <Image imgsrc={One}/>
       </div>
          
          </div>
       <div className=" w-[32%] h-[450px] bg-[rgba(245,245,244,0.96)] rounded-xl mb-[150px]">
       <div className="ml-[40px]">
       <Heading text={"Web Design  Basic to advance"} className=" font-bold text-[20px] mt-[40px]"/>
       <Image imgsrc={Coma}/>
       <Heading text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took " className={" text-[20px] pr-[49px]"}/>
       </div>
       <div className="h-[2px] w-[300px] bg-[#B1B3B6] mt-[50px] text-center ml-[60px]"> </div>
       <div className="ml-[40px] mt-[30px]">
       <Image imgsrc={Two}/>
       </div>
          
          </div>
       <div className=" w-[32%] h-[450px] bg-[rgba(245,245,244,0.96)] rounded-xl mb-[150px]">
       <div className="ml-[40px]">
       <Heading text={"Web Design  Basic to advance"} className=" font-bold text-[20px] mt-[40px]"/>
       <Image imgsrc={Coma}/>
       <Heading text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took " className={" text-[20px] pr-[49px]"}/>
       </div>
       <div className="h-[2px] w-[300px] bg-[#B1B3B6] mt-[50px] text-center ml-[60px]"> </div>
       <div className="ml-[40px] mt-[30px]">
       <Image imgsrc={Three}/>
       </div>
          
          </div>
       </Flex>
      </Container>
    </section>

    {/* Revew part end */}

    {/* Footer part start */}
    <section className='h-[500px] bg-[#0166FF]'>
      <Container className={""}>
        <Flex className={"justify-between"}>
          <div className=" w-[34%] mt-[100px] ">
          <Image imgsrc={FooterLogo}/>
          <Heading text={"Follow on social service"} className=" font-bold text-[20px] mt-[10px] text-white"/>
          <div className="mt-[10px]"><Image imgsrc={FooterIcon}/></div>
          </div>
          <div className=" w-[22%] ">
          <Heading text={"Links"} className=" font-bold text-[20px] mt-[100px] text-white"/>
          <Heading text="Home " className={" text-[20px] mt-[30px] text-white"}/>
          <Heading text="Help center " className={" text-[20px] mt-[30px] text-white"}/>
          <Heading text="Service " className={" text-[20px] mt-[30px] text-white"}/>
          </div>
     
          <div className=" w-[22%] ">
          <Heading text={" Resource"} className=" font-bold text-[20px] mt-[100px] text-white"/>
          <Heading text="Help center " className={" text-[20px] mt-[30px] text-white"}/>
          <Heading text="Carrier " className={" text-[20px] mt-[30px] text-white"}/>
          <Heading text="Legal Notice " className={" text-[20px] mt-[30px] text-white"}/>
          </div>
           
          <div className=" w-[22%] ">
          <Heading text={"Contacts"} className=" font-bold text-[20px] mt-[100px] text-white"/>
          <Heading text="192. New york " className={" text-[20px] mt-[30px] text-white"}/>
          <Heading text="Support " className={" text-[20px] mt-[30px] text-white"}/>
          <Heading text="+1125156363 " className={" text-[20px] mt-[30px] text-white"}/>
          </div>
          
          
        </Flex>
        <div className="h-[2px] w-[700px] bg-white mt-[120px] ml-[290px]"></div>
        <Heading text="Copyright 2020@ all right" className={" text-[20px] mt-[30px] text-white ml-[545px]"}/>
      </Container>
    </section>
    {/* Footer part end */}




    

    </>
  )           
}

export default App

