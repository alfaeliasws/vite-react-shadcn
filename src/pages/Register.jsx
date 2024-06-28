import React from 'react'
import MainContainer from '../components/web_components/Container'
import WebHeader from '../components/web_components/header'
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { defFlex, fullWH } from '../styles/coinedStyle'
import { c } from '../helpers/styleHelper'
import { register } from '../services/Auth'
import { useState } from 'react'
import { redirect } from 'react-router-dom'
import { AlertDialogColored } from '../components/web_components/AlertDialogColored'

function Register() {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [message, setMessage] = useState("")
  const [colorClass, setColorClass] = useState("")

  async function handleRegister(){
    const response = await register(email, username, password)

    if(response && response.success == 1){
      return redirect("/")
    } else {
      openToaster(response.message, "text-red-600")
    }
  }

  async function openToaster(message, colorClass){
    setColorClass(prev => colorClass)
    setMessage(prev => message)
  }

  function validateStates(){
    return username === "" || email === '' || password === "" || confirmPassword === "" || password !== confirmPassword
  }

  return (
    <MainContainer>
      <WebHeader />
      <div className={c(defFlex, fullWH, "min-h-[80vh] justify-center align-middle")}>
        <Card className={c("mx-auto my-auto w-3/12 max-h-104")}>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Register</CardTitle>
            <CardDescription>Fill your basic profile</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Your Username" required type="text" onChange={(e) => setUsername((prev) => e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="youremail@example.com" required type="email" onChange={(e) => setEmail((prev) => e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="Password" required type="password" onChange={(e) => setPassword((prev) => e.target.value)}/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Confirm Password</Label>
                <Input id="password" placeholder="Confirm Password" required type="confirmPassword" onChange={(e) => setConfirmPassword((prev) => e.target.value)}/>
              </div>
              <Button className="w-full" onClick={(e) => handleRegister()} disabled={validateStates()}>
                Register
              </Button>
            </div>
          </CardContent>    
        </Card>
      </div >

      <AlertDialogColored message={message} color={colorClass} open={message !== ""} setMessage={setMessage}/>

    </MainContainer>
  )
}

export default Register