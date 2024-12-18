import React from 'react'

const Widget = () => {
  return (
    <div>
        <div class="widget">
                <h1>Other Projects</h1>
                <div class="widget-content">
                    <div class="widget-card">
                        <div class="widget-img"><img src="/images/pic1.png" alt=""/></div>
                        <span><p>Rock-paper-scissor</p>
                        <p>A fun game</p></span>
                     </div>
                     <div class="widget-card">
                         <div class="widget-img"><img src="/images/pic2.jpeg" alt=""/></div>
                         <span><p>Calculator</p>
                         <p>Do your math</p></span>
                      </div>
                      <div class="widget-card">
                        <div class="widget-img"><img src="/images/pic3.jpeg" alt=""/></div>
                        <span><p>Etch a sketch</p>
                        <p>CSS fun board</p></span>
                     </div>
                     <div class="widget-card">
                         <div class="widget-img"><img src="/images/pic2.jpeg" alt=""/></div>
                         <span><p>Mork-up</p>
                         <p>A bigger step in dev game</p></span>
                      </div>
                </div>
            </div>
    </div>
  )
}

export default Widget