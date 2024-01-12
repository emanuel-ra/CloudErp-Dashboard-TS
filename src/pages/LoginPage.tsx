import './LoginPage.css'
import { Card,TextInput,Text ,Bold,Callout,List, ListItem  } from "@tremor/react"
import { UserIcon,ExclamationIcon  } from "@heroicons/react/solid";
import { Button } from "@tremor/react";
import { useLoginStore } from '../stores/auth';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { SwitchTheme } from '../components/Switches/SwitchTheme';
import { useThemeStore } from '../stores/ui/theme';

interface  Error  {
    error:boolean;
    msg:string
}

export const LoginPage = () => {
    const theme = useThemeStore(state => state.theme)
    const [errorUserName, setErrorUserName] = useState<Error>()
    const [errorPassword, setErrorPassword] = useState<Error>()

    const LogIn = useLoginStore(state => state.logIn)
    const session = useLoginStore(state => state.session)
    const errors = useLoginStore(state => state.errors)
    
    const handleLogin = async ()=>{
        const username = (document.getElementById('UserName') as HTMLInputElement).value
        const password = (document.getElementById('Password') as HTMLInputElement).value

        if(username===''){
            setErrorUserName({error:true,msg:'Type your username'});  
            return          
        }else{
            setErrorUserName({error:false,msg:''});            
        }

        if(password===''){
            setErrorPassword({error:true,msg:'Type your password'});            
            return
        }else{
            setErrorPassword({error:false,msg:''});            
        }
        
        LogIn({username, password })
        
    }
    
    if(session?.token){
        return <Navigate to={`/`} />    
    }
    return (<>
    <main data-mode={theme}  className={`w-full min-h-screen `}>
        <div className='bg-light dark:bg-slate-800 w-full min-h-screen relative flex justify-center items-center px-4 lg:px-0'>
            <Card className="lg:w-1/3 flex flex-col gap-4">
                <Bold><Text>Cloud Erp</Text></Bold>
                <TextInput error={errorUserName?.error} errorMessage={errorUserName?.msg} id='UserName' icon={UserIcon} placeholder="" />
                <TextInput error={errorPassword?.error} errorMessage={errorPassword?.msg} id='Password' placeholder="Type password here" type="password" />
                <Button onClick={handleLogin}>LogIn</Button>

                {errors?.length ?
                <Callout
                    className="mt-4"
                    title="Something when wrong"
                    icon={ExclamationIcon}
                    color="rose"
                >
                    <ul>
                        {errors.map((error,index)=>(<li key={index}>{error}</li>))}
                    </ul>
                </Callout>:''}
            </Card>
            <div className={`absolute bottom-5 right-5`}>
                <SwitchTheme />
            </div>
        </div>
    </main>
    </>
    )
}