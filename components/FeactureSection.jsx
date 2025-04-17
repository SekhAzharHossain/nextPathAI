import {
    Card,
    CardContent,
  } from "@/components/ui/card"

import { features } from "@/data/feactures"
  
  const FeactureSection = () => {
    return (
        <section className=" w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Powerful features for Your Career Growth</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feacture,index)=>{
              return(
                <Card key={index} className="border-2 hover:border-primary tranistion-colors duration-300">
                  <CardContent className="pt-6 text-center flex flex-col justify-center">
                    <div className="flex flex-col items-center justify-center">
                      {feacture.icon}
                      <h3>{feacture.title}</h3>
                      <p>{feacture.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
  
  export default FeactureSection




