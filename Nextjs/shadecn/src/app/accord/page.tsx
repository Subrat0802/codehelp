import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

  import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
  

const AccordPage = () => {
    const faq = [
        {
            qus:"How are you",
            ans:"Good"
        },
        {
            qus:"whats your name?",
            ans:"Subrat Mishra"
        },
        {
            qus:"How old are you?",
            ans:"27"
        },
        {
            qus:"where is hometown?",
            ans:"Rewa Madhya pradesh"
        },
    ]
  return (
    <div className="flex justify-center items-center flex-col ">
        
        <main className="w-[500px] p-4">
            {
                faq.map((el) => (
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>{el.qus}</AccordionTrigger>
                            <AccordionContent>
                                {el.ans}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))
            }
        

        </main>

        <Alert>
  
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                    You can add components and dependencies to your app using the cli.
                </AlertDescription>
        </Alert>

        <div>
            <AlertDialog>
                <AlertDialogTrigger>Open</AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>



    </div>
  )
}

export default AccordPage