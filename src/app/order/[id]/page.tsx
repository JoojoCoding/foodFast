import { prisma } from "@/database/db"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image"
  

const OrderPage = async({ params }: { params: string}) => {

    const restaurants = await prisma.restaurant.findMany()
    console.table(restaurants)

    if(restaurants == null) return <p>Brak wyników</p>
    return(
        <>
            {restaurants.map(rest => (
                <RestaurantCard key={rest.id} {...rest}/>
            ))}
        </>
    )
}



type Restaurant = {
    name: string
    address: string
    rate: number
    category: string
    imagePath: string
    websitePath: string
}

const RestaurantCard = (data: Restaurant) => {
    return (
        <Card className="flex w-[30%] m-7">
            <div className="flex justify-center items-center">
                <img src={data.imagePath} alt="image" className="max-w-[300px]"/>
            </div>
            <div>
            <CardHeader>
                <CardTitle>{data.name}</CardTitle>
                <CardDescription>{data.rate}</CardDescription>
            </CardHeader>
            <CardContent>
                <ul>
                    <li>Kategoria: {data.category}</li>
                    <li>Adres: {data.address}</li>
                    <li>Strona: <a href={data?.websitePath}>{data?.websitePath}</a></li>
                </ul>
            </CardContent>
            </div>
        </Card>
    )
}

export default OrderPage