"use client";
import React, { useState } from "react";
import DashboardCard from "./DashboardCard";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import MyDashboardNavbar from "./MyDashboardNavbar"
import { app } from "./dashboard.module.css"

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className={app}>
      <Sidebar isOpen={isSidebarOpen} />
      <Container fluid>
        <MyDashboardNavbar setIsSidebarOpen={() => setIsSidebarOpen(!isSidebarOpen)} />
        <Row className="mt-4 ms-1">
          {[
            'Primary',
            'Success',
            'Danger',
            'Warning'
          ].map((variant) => (
            <Col key={variant} lg={3} md={6}>
              <DashboardCard title="Card 1" content="Content of Card 1" variant={variant} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
