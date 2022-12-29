import React from 'react';
import { Card, CardBody, CardHeader, CardTitle } from 'reactstrap';

const Contact = () => {
  return (
    <>
      <body className='App'>
        <div className='row p-2'>
          <h1>Pricing</h1>
          <Card className='col-sm-4 col-8 offset-2'>
            <CardHeader>
              <CardTitle><h2>Basic Package (30 Day Plan)</h2></CardTitle>
            </CardHeader>
            <CardBody>
              <h4>EST Monthly ~ $595 - $1,995</h4>
              <div>
                <h5><strong>Social Media Review</strong></h5>
                <ul>
                  <li>Assessing Current Brand Identity</li>
                  <li>Bio Optimization</li>
                  <li>Defined 'niche'</li>
                  <li>Engagement</li>
                  <li>Account Aesthetics & Relevancy</li>
                  <li>Hashtags and Keyword Search</li>
                </ul>
              </div>
              <h5><strong>Content Session</strong></h5>
              <ul>
                <li>Time dedicated to genrerating videos and pictures for content strategy</li>
                <li>Developing Brand awareness and highlighting comapny values</li>
              </ul>
              <h5><strong>Social Media Strategy</strong></h5>
              <ul>
                <li>Custom action plab for Growth and Engagement</li>
              </ul>
              <h5><strong>Received Content</strong></h5>
              <ul>
                <li>Content delivered to client to post at will</li>
              </ul>
            </CardBody>
          </Card>
          <Card className='col-sm-4 offset-sm-0 col-8 offset-2'>
            <CardHeader>
              <CardTitle><h2>Premium Package (30 Day Plan)</h2></CardTitle>
            </CardHeader>
            <CardBody>
              <h4>EST Monthly ~ $795 - $2,995</h4>
              <h5><strong>Social Media Review</strong></h5>
              <ul>
                <li>Assessing Current Brand Identity</li>
                <li>Bio Optimization</li>
                <li>Defined 'niche'</li>
                <li>Engagement</li>
                <li>Account Aesthetics & Relevancy</li>
                <li>Hashtags and Keyword Search</li>
              </ul>
              <h5><strong>Social Media Management</strong></h5>
              <ul>
                <li>Custom strategy tailored to increase engagement, growth, and consistency</li>
                <li>Access to account to scheduled posts and account overall maintenance</li>
              </ul>
              <h5><strong>Social Media Insight Report</strong></h5>
              <ul>
                <li>Monthly report to review engagement, follows/connections, and single posts that created positive results</li>
              </ul>
              <h5><strong>Content Session</strong></h5>
              <ul>
                <li>Time dedicated to generating videos and pictures for content strategy</li>
                <li>Developing Brand awareness and highlighting comapny values</li>
              </ul>
            </CardBody>
          </Card>
        </div>
        <div id='contact' className='mt-3'>
          <h1>Contact</h1>
          <i className='fa fa-phone fa-4x' />
          <a href='tel:'><h4>Call (503) 680-1740</h4></a><br />
          <i className='fa fa-comment fa-4x' />
          <a href='sms:'><h4>Text Message</h4></a><br />
          <i className='fa fa-envelope fa-4x' /><br />
          <a href='mailto:cobaltturtlecreatives@gmail.com?Subject=Cobalt Inquiries'><h4>Email<br />cobaltturtlecreatives@gmail.com</h4></a>
          <br />
          <i className='fa fa-instagram fa-4x'></i>
          <br />
          <a href="https://instagram.com/stories/cobalturtlemediacreator/2971095744246930149?utm_source-ig_story_item_share&igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer"><h4>@cobalturtlemediacreator</h4></a>
          <br/>
        </div>
      </body>
    </>
  )
}

export default Contact;