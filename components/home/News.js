import Image from "next/image";
import Link from "next/link";
import { BsFillChatLeftFill } from 'react-icons/bs';
import { BsStopwatch } from 'react-icons/bs';
import moment from 'moment';
const News = ({ data }) => {
    
    // const today = new Date();
    // const date = today.getDate() + '-' + "0"+ parseInt(today.getMonth() + 1)  + '-' + today.getFullYear();


    let date = moment(new Date()).format('DD-MM-YYYY')



    return (
        <div className="mx-5 lg:mx-20 lg:p-10 my-5">
            <div className="flex flex-wrap justify-between p-5">
                <h1 className="text-2xl font-bold">Marketplace News</h1>
                <Link className="font-semibold text-green-500" href={'/newsite'}> View All Ariticles</Link>
            </div>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 gird-cols-1 gap-10 ">
                {
                    data?.map((d) => (
                        <div key={d._id} className="shadow relative overflow-hidden">
                            <Image className="w-full transition duration-300 ease-in-out hover:scale-110" src={d.img1} width={300} height={300} alt="product" />
                            <div className="lg:p-10 p-3">
                                <h1 className="text-xl font-semibold text-blue-600">{d.title}</h1>
                                <p className="text-2xl font-bold mt-3">{d.dec}</p>
                                <div className="flex items-center align-items-center text-2xl gap-5 mt-5 text-gray-500">
                                    <BsFillChatLeftFill />
                                    <span className="text-xs font-bold">{0}</span>
                                    <BsStopwatch />
                                    <p className="text-xs font-bold">{date}</p>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default News;