import React from "react";
import Route from "../components/Route/Route";

function HomeScreen() {
    return (
        <>
            <div>
                <div style={{
                    backgroundImage:"url('assets/banner.jpg')",
                    height:"400px",
                    backgroundPosition:"center center",
                    backgroundSize:"cover",
                }}>
                    <div style={{
                        backgroundColor:"black",
                        height:"400px",
                        opacity:"0.3"
                    }}>
                        <p style={{fontSize:"40px", textTransform:"uppercase", color:"white", paddingTop:"10%"}}>Bus Kothay<br/>
                            University Transport
                        </p>
                    </div>
                </div>
                <div>
                    <Route/>
                </div>
            </div>
        </>
    );
}
export default HomeScreen;