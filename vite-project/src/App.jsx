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

function App() {
  

  return (
    <>
      <nav className='w-full h-[65px] bg-regular-100 flex justify-center'>
        <div className='h-full w-[1116px] flex justify-between'>
          <div className='h-full w-[506px] flex items-center justify-between'>
            <img src={logo} alt=""/>
            <div className='flex h-full w-[74px] items-center justify-between'>
              <p className='font-roboto text-eeeeee-100 cursor-pointer'>Product</p>
              <img className='cursor-pointer' src={arrow_down} alt="" />
            </div>
            <div className='flex h-full w-[96px] items-center justify-between'>
              <p className='font-roboto text-eeeeee-100 cursor-pointer'>Developers</p>
              <img className='cursor-pointer' src={arrow_down} alt="" />
            </div>
            <div className='flex h-full w-[30px] items-center justify-between'>
              <p className='font-roboto text-eeeeee-100 cursor-pointer'>Beta</p>
            </div>
            <div className='flex h-full w-[47px] items-center justify-between'>
              <p className='font-roboto text-eeeeee-100 cursor-pointer'>Pricing</p>
            </div>
          </div>
          <div className='h-full w-[197px] flex justify-between items-center'>
            <button className='h-[30px] w-[128px] bg-butbg-100 text-white font-bold text-[12px] rounded-[4px] cursor-pointer'><p>Start your project</p></button>
            <button className='font-bold text-[14px] text-white cursor-pointer'><p>Sign in</p></button>
          </div>
        </div>
      </nav>

      {/* Store and Serve */}
      <section className='w-full h-[589px] bg-regular-100 flex justify-center'>
        <div className='h-full w-[1280px] flex justify-between items-end'>
          <div className='w-[566px] h-[461px] flex flex-col justify-between items-start'>
            <div className='flex h-[32px] w-[108px] justify-between items-center'>
              <img src={Sec1_icon} alt="" />
              <p className='text-[18px] text-white'>Storage</p>
            </div>
            <p className='text-white font-bold text-[48px]'>Store and serve <br /> any type of digital content</p>
            <p className='text-[14px] text-graybr-100'>An open source Object store service with unlimited scalability, for <br /> any file type.</p>
            <p className='text-[14px] text-graybr-100'>With custom policies and permissions that are familiar and easy to <br /> implement.</p>
            <button className='h-[38px] w-[133px] bg-butbg-100 text-white font-bold text-[14px] rounded-[4px] cursor-pointer relative left-[45px]'><p>Start your project</p></button>
          </div>
          <img className='relative bottom-[30px]' src={sec1_img} alt="" />
        </div>
      </section>

      {/* able-fast-able */}
      <section className='w-full h-[384px] bg-regular-100 flex justify-center items-center'>
        <div className='w-[1120px] h-[192px] flex justify-between'>
          {/* sec2_d1 */}
          <div className='w-[280px] h-[192px] flex flex-col justify-between items-start'>
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
          <div className='h-full w-[280px] flex flex-col gap-[16px] items-start'>
            <img src={Sec2_signal} alt="" />
            <p className='text-[18px] text-white'>Lightning fast</p>
            <p className='text-[18px] text-graybr-100'>Thin API server layer that leverages Postgres' permissions and performance.</p>
          </div>

          {/* sec2_d3 */}
          <div className='h-full w-[280px] flex flex-col gap-[16px] items-start'>
            <img src={Sec2_galka} alt="" />
            <p className='text-[18px] text-white'>Dependable</p>
            <p className='text-[13px] text-graybr-100'>Enterprise-level scalability and durability.</p>
          </div>
        </div>
      </section>

      {/* Sleek */}
      <section className='w-full h-[875px] bg-regular-100 flex justify-center items-center'>
        <div className='w-[1280px] h-[875px]'>
          <p className='text-[48px] text-white line-'>Sleek dashboard for managing your media</p>
          <p className='text-[18px] text-graybr-100 mt-[16px]'>A complete Object Explorer so that any of your team can use.</p>
          <p className='text-[14px] text-graybr-100 mt-[16px]'>Drag and drop uploading, moving objects, and multiple object selection. As easy as working on your desktop.</p>
          <div className='mt-[64px] w-[1120px] h-[482px] flex justify-between items-start'>
            <div className='w-[560px] h-[415px] flex flex-col justify-between'>
              <div className='w-full h-[30px] flex gap-[32px] items-center'>
                <p className='w-[91px] h-full rounded-[4px] bg-gray2-100 text-white text-[11px] flex items-center justify-center'>File previews</p>
                <p className='text-[12px] text-grayergray-100'>Column view</p>
                <p className='text-[12px] text-grayergray-100'>List view</p>
                <p className='text-[12px] text-grayergray-100'>Multi select actions</p>
                <p className='text-[12px] text-grayergray-100'>Path navigator</p>
              </div>
              <img src={Sec3_img} alt="" />
            </div>
            <div className='w-[373px] h-full flex flex-col justify-between'>
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
    </>
  )
}

export default App
