import { Button } from '../Button'
import { Container, Image, Text } from './styles'

export function Greetings() {
  function handleSayHello() {
    window.Main.sendMessage('Hello World');
    // console.log('Message sent! Check main process log in terminal.')
  }

  return (
    <Container>
      <Button onClick={ handleSayHello }>Send message to main process</Button>
    </Container>
  )
}
 
