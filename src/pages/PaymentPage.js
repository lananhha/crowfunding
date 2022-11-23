import logoPaypal from '../assets/images/logo_paypal.png'
import logoPayoneer from '../assets/images/logo_payoneer.png'
import Button from '../components/Button';

function PaymentPage() {
    return ( 
        <div className='flex items-center justify-center h-fit'>
            <div className='w-[624px] pt-16 flex flex-col items-center'>
                <h1 className='text-2xl font-bold text-text1 leading-[38px] mb-2.5'>Connect Your Payment Processor</h1>
                <p className='text-base text-text3 leading-[26px] font-normal text-center mb-[60px]'>To Start Processing credit card payments and donations, you will need to select either Paypal or Payoneer </p>
                <div className='grid grid-cols-2 gap-10'>
                    <div className='flex flex-col items-center p-6 bg-white shadow-shawDowPayment rounded-[20px]'>
                        <img src={logoPaypal} />
                        <p className='mt-10 mb-6 text-xs text-text3 leading-[22px] font-normal'>Get paid directly via Paypal.</p>
                        <Button className='bg-[#EEEAFD] text-secondary'>Connect</Button>
                    </div>
                    <div className='flex flex-col items-center p-6 bg-white shadow-shawDowPayment rounded-[20px]'>
                        <img src={logoPayoneer} />
                        <p className='mt-10 mb-6 text-xs text-text3 leading-[22px] font-normal'>Get paid worldwide your Work.</p>
                        <Button className='bg-[#EEEAFD] text-secondary'>Connect</Button>
                    </div>
            </div>
            </div>
        </div>
     );
}

export default PaymentPage;