import './App.css'
import logo from '../src/assets/logo.png'
import arrow_down from '../src/assets/arrow_down.png'
import sec1_img from '../src/assets/Sec1_img.png'
import Sec1_icon from '../src/assets/Sec1_icon.png'
import Sec2_icon1 from '../src/assets/Sec2_icon1.png'
import Sec2_icon2 from '../src/assets/Sec2_icon2.png'
import Sec2_icon3 from '../src/assets/Sec2_icon3.png'
import Sec2_X from '../src/assets/Sec2_X.png'
import Sec2_signal from '../src/assets/Sec2_signal.png'
import Sec2_galka from '../src/assets/Sec2_galka.png'
import Sec3_img from '../src/assets/Sec3_img.png'
import Sec4_icon from '../src/assets/Sec4_icon.png'
import Sec4_icon2 from '../src/assets/Sec4_icon2.png'
import Api_icon1 from '../src/assets/Api_icon1.png'
import Api_icon2 from '../src/assets/Api_icon2.png'
import Testy from '../src/assets/Testy.png'
import Int_but from '../src/assets/Int_but.png'
import Int_img from '../src/assets/Int_img.png'
import Ftwitter from '../src/assets/Ftwitter.png'
import Fgit from '../src/assets/Fgit.png'
import F1 from '../src/assets/F1.png'
import F2 from '../src/assets/F2.png'
import F3 from '../src/assets/F3.png'

function App() {
  

  return (
    <>
      <nav className='w-full h-[65px] bg-regular-100 flex justify-center'>
        <div className='h-full w-[1116px] flex justify-between max-xl:w-[900px] max-lg:w-[700px] max-sm:w-[300px]'>
          <div className='h-full w-[506px] flex items-center justify-between max-lg:w-[400px] max-sm:w-[100px]'>
            <img src={logo} className='max-sm:w-[100px]' alt=""/>
            <div className='flex h-full w-[74px] items-center justify-between max-sm:hidden'>
              <p className='font-roboto text-eeeeee-100 cursor-pointer'>Product</p>
              <img className='cursor-pointer' src={arrow_down} alt="" />
            </div>
            <div className='flex h-full w-[96px] items-center justify-between max-sm:hidden'>
              <p className='font-roboto text-eeeeee-100 cursor-pointer'>Developers</p>
              <img className='cursor-pointer' src={arrow_down} alt="" />
            </div>
            <div className='flex h-full w-[30px] items-center justify-between max-sm:hidden'>
              <p className='font-roboto text-eeeeee-100 cursor-pointer'>Beta</p>
            </div>
            <div className='flex h-full w-[47px] items-center justify-between max-sm:hidden'>
              <p className='font-roboto text-eeeeee-100 cursor-pointer'>Pricing</p>
            </div>
          </div>
          <div className='h-full w-[197px] flex justify-between items-center max-sm:w-[150px]'>
            <button className='h-[30px] w-[128px] bg-butbg-100 text-white font-bold text-[12px] rounded-[4px] cursor-pointer max-sm:w-[100px]'><p>Start your project</p></button>
            <button className='font-bold text-[14px] text-white cursor-pointer'><p>Sign in</p></button>
          </div>
        </div>
      </nav>

      {/* Store and Serve */}
      <section className='w-full h-[589px] bg-regular-100 flex justify-center max-lg:h-[400px] max-sm:h-[700px]'>
        <div className='h-full w-[1280px] flex justify-between items-end max-xl:w-[900px] max-lg:w-[600px] max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-[50px]'>
          <div className='w-[566px] h-[461px] flex flex-col justify-between items-start max-xl:w-[400px] max-lg:h-[361px] max-sm:items-center max-sm:text-center'>
            <div className='flex h-[32px] w-[108px] justify-between items-center'>
              <img src={Sec1_icon} alt="" />
              <p className='text-[18px] text-white'>Storage</p>
            </div>
            <p className='text-white font-bold text-[48px] max-lg:text-[20px]'>Store and serve <br /> any type of digital content</p>
            <p className='text-[14px] text-graybr-100 max-sm:w-[350px]'>An open source Object store service with unlimited scalability, for <br /> any file type.</p>
            <p className='text-[14px] text-graybr-100 max-sm:w-[350px]'>With custom policies and permissions that are familiar and easy to <br /> implement.</p>
            <button className='h-[38px] w-[133px] bg-butbg-100 text-white font-bold text-[14px] rounded-[4px] cursor-pointer relative left-[45px] max-sm:left-[0px]'><p>Start your project</p></button>
          </div>
          <img className='relative bottom-[30px] max-xl:w-[400px] max-lg:w-[300px]' src={sec1_img} alt="" />
        </div>
      </section>

      {/* able-fast-able */}
      <section className='w-full h-[384px] bg-regular-100 flex justify-center items-center max-sm:h-[800px]'>
        <div className='w-[1120px] h-[192px] flex justify-between max-xl:w-[900px] max-lg:w-[650px] max-sm:w-[300px] max-sm:flex-col max-sm:h-[700px] max-sm:items-center'>
          {/* sec2_d1 */}
          <div className='w-[280px] h-[192px] flex flex-col justify-between items-start max-lg:w-[200px]'>
            <div className='h-[32px] w-[170px] flex justify-between items-center'>
              <img src={Sec2_icon1} alt="" />
              <img src={Sec2_X} alt="" />
              <img src={Sec2_icon2} alt="" />
              <img src={Sec2_X} alt="" />
              <img src={Sec2_icon3} alt="" />
            </div>
            <p className='text-[18px] text-graybr-100'>Interoperable</p>
            <p className='text-[18px] text-graybr-100'>Integrates well with the rest of Supabase ecosystem, including Auth and Postgres.</p>
          </div>

          {/* sec2_d2 */}
          <div className='h-full w-[280px] flex flex-col gap-[16px] items-start max-lg:w-[200px] max-sm:h-[200px]'>
            <img src={Sec2_signal} alt="" />
            <p className='text-[18px] text-white'>Lightning fast</p>
            <p className='text-[18px] text-graybr-100'>Thin API server layer that leverages Postgres' permissions and performance.</p>
          </div>

          {/* sec2_d3 */}
          <div className='h-full w-[280px] flex flex-col gap-[16px] items-start max-lg:w-[200px] max-sm:h-[200px]'>
            <img src={Sec2_galka} alt="" />
            <p className='text-[18px] text-white'>Dependable</p>
            <p className='text-[13px] text-graybr-100'>Enterprise-level scalability and durability.</p>
          </div>
        </div>
      </section>

      {/* Sleek */}
      <section className='w-full h-[875px] bg-regular-100 flex justify-center items-center max-lg:h-[1200px] max-sm:h-[1300px]'>
        <div className='w-[1280px] h-[875px] max-xl:w-[900px] max-lg:w-[600px] max-sm:w-[300px] max-sm:h-[1200px]'>
          <p className='text-[48px] text-white line-'>Sleek dashboard for managing your media</p>
          <p className='text-[18px] text-graybr-100 mt-[16px]'>A complete Object Explorer so that any of your team can use.</p>
          <p className='text-[14px] text-graybr-100 mt-[16px]'>Drag and drop uploading, moving objects, and multiple object selection. As easy as working on your desktop.</p>
          <div className='mt-[64px] w-[1120px] h-[482px] flex justify-between items-start max-xl:w-[900px] max-lg:w-[600px] max-lg:flex-col max-lg:items-center max-lg:gap-[60px] max-sm:w-[300px]'>
            <div className='w-[560px] h-[415px] flex flex-col justify-between max-xl:w-[460px] max-sm:w-[300px]'>
              <div className='w-full h-[30px] flex gap-[32px] items-center'>
                <p className='w-[91px] h-full rounded-[4px] bg-gray2-100 text-white text-[11px] flex items-center justify-center'>File previews</p>
                <p className='text-[12px] text-grayergray-100'>Column view</p>
                <p className='text-[12px] text-grayergray-100'>List view</p>
                <p className='text-[12px] text-grayergray-100'>Multi select actions</p>
                <p className='text-[12px] text-grayergray-100'>Path navigator</p>
              </div>
              <img src={Sec3_img} alt="" />
            </div>
            <div className='w-[373px] h-full flex flex-col justify-between max-sm:w-[300px]'>
              <p className='text-white text-[18px]'>File previews</p>
              <p className='text-[16px] text-graybr-100'>Preview any media type, including video and <br /> audio.</p>
              <p className='text-white text-[18px]'>Check out our example app</p>
              <div className='w-full h-[160px] bg-gray1f-100 flex justify-center items-center'>
                <div className='w-[331px] h-[116px] flex flex-col justify-between'>
                  <p className='text-white text-[16px]'>Profile management example</p>
                  <p className='text-graybr-100 text-[13px]'>Update a user account with public profile <br /> information, including uploading a profile image.</p>
                  <div className='flex w-full h-24px gap-[8px]'>
                    <p className='text-graybr-100 text-[14px]'>Created by:</p>
                    <img src={Sec4_icon} alt="" />
                    <p className='text-[13px] text-graybr-100'>supabase</p>
                  </div>
                </div>
              </div>
              {/* nexttj */}
              <div className='ml-[21px] flex items-center'>
                <p className='text-[14px] text-graybr-100'>nextjs-ts-user-management</p>
                <img className='ml-[10px]' src={Sec4_icon2} alt="" />
              </div>
              <button className='bg-bluebut-100 w-[92px] h-[32px] text-white rounded-[4px] cursor-pointer'> <p>Deploy</p> </button>
              <div className='w-full h-[1px] bg-gray2-100'></div>
            </div>
          </div>
        </div>
      </section>

      {/* simple api */}
      <section className='w-full h-[700px] bg-regular-100 flex justify-center items-end max-lg:h-[1200px] max-lg:items-center'>
        <div className='w-[1120px] h-[511px] flex justify-between max-xl:w-[900px] max-lg:w-[600px] max-lg:h-[800px] max-lg:flex-col max-lg:justify-center max-lg:items-center max-sm:w-[300px]'>
          {/* simple api info */}
          <div className='w-[429px] h-full flex flex-col gap-[16px] max-sm:w-[300px]'>
            <p className='text-[36px]/[43px] text-white'>Simple and convenient APIs</p>
            <p className='text-[14px] text-graybr-100'>Built from the ground-up for interoperable authentication.</p>
            <p className='text-[14px] text-graybr-100'>Fast and easy to implement using our powerful library clients. <br /> Asset optimization and image transformation coming soon!</p>
            <div className='w-full h-[189px] flex justify-between'>
              <div className='w-[192px] h-full flex flex-col justify-between items-start'>
                <img src={Api_icon1} alt="" />
                <p className='text-white text-[18px]'>CDN integration</p>
                <p className='text-graybr-100 text-[14px]'>Serve from the edge to <br /> reduce latency.</p>
                <p className='text-[12px] text-blueagain w-[97px] h-[20px] bg-bluebg text-center rounded-2xl'>Coming soon</p>
              </div>

              <div className='w-[192px] h-full flex flex-col justify-between items-start'>
                <img src={Api_icon2} alt="" />
                <p className='text-white text-[12px]'>Auto transformation & <br /> optimisation</p>
                <p className='text-graybr-100 text-[14px]'>Resize and compress your <br /> media before you serve it.</p>
                <p className='text-[12px] text-blueagain w-[97px] h-[20px] bg-bluebg text-center rounded-2xl'>Coming soon</p>
              </div>
            </div>
          </div>
          
          <div className='w-[526px] h-[356px] flex flex-col justify-betwee max-xl:w-[426px] max-sm:w-[300px]'>
              <div className='w-full h-[30px] flex gap-[22px] items-center'>
                <p className='w-[91px] h-full rounded-[4px] bg-gray2-100 text-white text-[11px] flex items-center justify-center'>Upload a file</p>
                <p className='text-[12px] text-grayergray-100'>Download a file</p>
                <p className='text-[12px] text-grayergray-100'>List view</p>
                <p className='text-[12px] text-grayergray-100'>Move and rename files</p>
                <p className='text-[12px] text-grayergray-100'>Delete files</p>
              </div>
              <img src={Testy} alt="" />
            </div>
        </div>
      </section>

      {/* integrates */}
      <section className='w-full h-[357px] flex justify-center bg-regular-100 max-lg:h-[1000px] max-lg:items-center'>
        <div className='w-[1120px] h-full flex justify-between max-xl:w-[900px] max-lg:w-[600px] max-lg:flex-col max-lg:items-center max-lg:h-[700px] max-sm:w-[300px]'>
          <div className='w-[429px] [h-325px] flex flex-col justify-between max-lg:h-[350px] max-sm:w-[300px]'>
            <p className='text-[36px] text-white'>Integrates natively with Supabase Auth</p>
            <p className='text-[14px] text-graybr-100'>Using Postgres Row Level Security to create Object access rules.</p>
            <p className='text-[14px] text-graybr-100'>Storage Authorization is built around Postgres so that you can use any combination of SQL, Postgres functions, and even your own metadata to write policies.</p>
            <button className='w-[205px] h-[36px] rounded-[4px] flex justify-center items-center gap-[8px] bg-gray2-100'><img src={Int_but} alt="" /><p className='text-[14px] text-graybr-100'>Expore documentation</p></button>
          </div>

          <div className='w-[528px] h-full flex flex-col justify-between max-xl:w-[428px] max-lg:h-[300px] max-sm:w-[300px]'>
              <div className='w-full h-[30px] flex gap-[20px] items-center'>
                <p className='w-[164px] h-full rounded-[4px] bg-gray2-100 text-white text-[11px] flex items-center justify-center'>Public access to a bucket</p>
                <p className='text-[12px] text-grayergray-100'>Public access to a folder</p>
                <p className='text-[12px] text-grayergray-100'>Authenticated access to a bucket</p>
              </div>

              <img src={Int_img} alt="" />
          </div>
        </div>
        
      </section>

      {/* last section */}
      <section className='bg-regular-100 w-full h-[400px] flex flex-col justify-center items-center gap-[32px]'>
        <p className='text-[36px] text-grayb max-sm:text-[20px]'>Build in a weekend, <span className='text-white'>scale to millions</span></p>
        <button className='h-[30px] w-[128px] bg-butbg-100 text-white font-bold text-[12px] rounded-[4px] cursor-pointer'><p>Start your project</p></button>
      </section>

      <footer className='w-full h-[700px] flex flex-col justify-center items-center bg-regular-100 gap-[100px] max-sm:h-[1000px] max-sm:justify-start'>
        {/* footer b1 */}
        <div className='w-[1120px] h-[208px] flex max-xl:w-[900px] max-lg:w-[600px] max-sm:w-[300px] max-sm:h-[600px] max-sm:flex-col'>
          {/* icons */}
          <div className='w-[352px] h-full max-sm:h-[100px]'>
            <img src={logo} alt="" />
            <div className='w-full h-[20px] flex gap-[30px] items-center mt-[32px]'>
              <img src={Ftwitter} alt="" /><img src={Fgit} alt="" />
            </div>
          </div>

          {/* all texts */}
          <div className='w-[736px] h-full flex justify-between max-sm:h-[1200px] max-sm:flex-col max-sm:justify-start  max-sm:w-[300px]'>
            <div className='[w-160px] h-full flex flex-col gap-[10px] max-sm:h-[250px]'>
              <p className='text-[14px] text-grayergray-100'>Product</p>
              <p className='text-[14px] text-eeeeee-100'>Database</p>
              <p className='text-[14px] text-eeeeee-100'>Authentication</p>
              <p className='text-[14px] text-eeeeee-100'>Storage</p>
              <p className='text-[14px] text-eeeeee-100'>Functions</p>
              <p className='text-[14px] text-eeeeee-100'>Coming soon</p>
              <p className='text-[14px] text-eeeeee-100'>Pricing</p>
            </div>

            <div className='[w-160px] h-full flex flex-col gap-[10px] max-sm:h-[170px]'>
              <p className='text-[14px] text-grayergray-100'>Resources</p>
              <p className='text-[14px] text-eeeeee-100'>Support</p>
              <p className='text-[14px] text-eeeeee-100'>Case Studies</p>
              <p className='text-[14px] text-eeeeee-100'>System Status</p>
              <p className='text-[14px] text-eeeeee-100'>Terms of service</p>
            </div>

            <div className='[w-160px] h-full flex flex-col gap-[10px] max-sm:h-[170px]'>
              <p className='text-[14px] text-grayergray-100'>Developers</p>
              <p className='text-[14px] text-eeeeee-100'>Documentation</p>
              <p className='text-[14px] text-eeeeee-100'>API Reference</p>
              <p className='text-[14px] text-eeeeee-100'>Guides</p>
            </div>

            <div className='[w-160px] h-full flex flex-col gap-[10px] max-sm:h-[300px]'>
              <p className='text-[14px] text-grayergray-100'>Company</p>
              <p className='text-[14px] text-eeeeee-100'>Blog</p>
              <p className='text-[14px] text-eeeeee-100'>Open Source</p>
              <p className='text-[14px] text-eeeeee-100'>Humans.txt</p>
              <p className='text-[14px] text-eeeeee-100'>Lawyers.txt</p>
            </div>
          </div>


        </div>

        {/* last block */}
        <div className='w-[1120px] h-[73px] border-t-[1px] border-grayergray-100 flex justify-between items-center max-xl:w-[900px] max-lg:w-[600px] max-sm:w-[300px] max-sw:h-[100px] max-sm:relative max-sm:top-[150px]'>
          <p className='text-[16px] text-grayergray-100'>© Supabase Inc</p>
          <div className='w-[140px] h-[40px] flex justify-between items-center'>
            <img src={F1} alt="" />
            <img src={F2} alt="" />
            <img src={F3} alt="" />
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
