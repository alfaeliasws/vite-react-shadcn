import React from 'react'
import MainContainer from '../components/web_components/Container'
import WebHeader from '../components/web_components/header'
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { defFlex, fullWH } from '../styles/coinedStyle'
import { c } from '../helpers/styleHelper'
import { useState } from 'react'
import { login } from '../services/Auth'
import { redirect } from 'react-router-dom'
import { AlertDialogColored } from '../components/web_components/AlertDialogColored'

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [message, setMessage] = useState("")
  const [colorClass, setColorClass] = useState("")

  async function handleLogin(){
    const response = await login(username, password)

    if(response && response.success == 1){
      return redirect("/")
    } else {
      openToaster(response.message, "text-red-600")
    }
  }

  async function openToaster(message, colorClass){
    setColorClass(prev => colorClass)
    console.log(colorClass)
    setMessage(prev => message)
  }

  return (
    <MainContainer>
      <WebHeader />
      <div className={c(defFlex, fullWH, "min-h-[80vh] justify-center align-middle")}>
        <Card className={c("mx-auto my-auto max-w-sm max-h-96")}>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <CardDescription>Enter your email and password to login to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email or Username</Label>
                <Input id="email" placeholder="Your Email or Username" required type="text" onChange={(e) => setUsername((prev) => e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="Password" required type="password" onChange={(e) => setPassword((prev) => e.target.value)}/>
              </div>
              <Button className="w-full" onClick={(e) => handleLogin()} disabled={username === "" || password === ""}>
                Login
              </Button>
            </div>
          </CardContent>    
        </Card>
      </div >

      <AlertDialogColored message={message} color={colorClass} open={message !== ""} setMessage={setMessage}/>

    </MainContainer>
  )
}

export default Login