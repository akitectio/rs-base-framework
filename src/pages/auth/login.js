import React from 'react'
import {
  Container,
  Row,
  Col,
  ThemeProvider,
  Form,
  Button
} from 'react-bootstrap'
import styles from '../../assets/css/login.module.css'

const Login = (props) => {
  const {
    title,
    styleTitle,
    textEmail,
    textPlaceholderEmail,
    textPassword,
    textPlaceholderPassword,
    textLogin,
    onPressLogin,
    errorPassword,
    errorEmail
  } = props
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint='xxs'
    >
      <Container fluid>
        <Row>
          <Col
            style={{
              backgroundImage: `url("https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg")`
            }}
            className={[styles.imageBg]}
          ></Col>
          <Col className={styles.rowForm}>
            <h1 style={styleTitle} className={styles.title}>
              {title ? title : 'Login on system'}
            </h1>
            <Form className={[styles.form]}>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label className={styles.textInput}>
                  {textEmail ? textEmail : 'Email address'}
                </Form.Label>
                <Form.Control
                  className={styles.input}
                  type='email'
                  placeholder={textPlaceholderEmail}
                />
                {errorEmail && (
                  <Form.Text className='text-muted'>{errorEmail}</Form.Text>
                )}
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label className={styles.textInput}>
                  {textPassword ? textPassword : 'Password'}
                </Form.Label>
                <Form.Control
                  className={styles.input}
                  type='password'
                  placeholder={textPlaceholderPassword}
                />
                {errorPassword ? (
                  <Form.Text className='text-danger'>{errorPassword}</Form.Text>
                ) : null}
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                <Form.Check type='checkbox' label='Check me out' />
              </Form.Group>
              <Button variant='primary' onProgress={onPressLogin} type='button'>
                {textLogin ? textLogin : 'Login'}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  )
}

export default Login
