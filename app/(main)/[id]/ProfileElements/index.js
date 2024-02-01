"use client";
import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Image from "next/image";

export default function ProfileElements({ user }) {
  const [activeTab, setActiveTab] = useState("all");
  const {
    photo,
    username,
    lastSignIn,
    follower_count,
    following_count,
    is_following,
    total_stars,
    sameUser,
    bio,
  } = JSON.parse(user);

  const handleTabSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  return (
    <Row className="justify-content-center mt-4">
      <Col md={8}>
        <Row className="mb-4">
          <Col md={5} className="text-center">
            <Image
              src={photo}
              alt="Profile Avatar"
              width={150}
              height={150}
              className="rounded-circle object-fit-contain"
              priority
            />
            <div>
              <h2 className="mt-3 mb-0">{username}</h2>
              <p className="text-muted small mb-0">
                Last Activity: {lastSignIn}
              </p>
              <p className="text-muted">Rating: {total_stars}</p>
            </div>
          </Col>

          <Col md={7}>
            <Stack className="column-gap-4" direction="horizontal">
              {is_following === 1 ? (
                <Button size="sm" className="py-0">
                  Dejar de seguir
                </Button>
              ) : is_following === 0 && sameUser ? (
                <></>
              ) : (
                <Button size="sm" className="py-0">
                  Seguir
                </Button>
              )}

              <i className="bi bi-envelope-fill"></i>

              <div>
                Followers: <strong>{follower_count}</strong>
              </div>

              <div>
                Following: <strong>{following_count}</strong>
              </div>
            </Stack>

            <Col className="mt-4" md={8}>
              <span>{bio}</span>
            </Col>
          </Col>
        </Row>

        <Tab.Container activeKey={activeTab} onSelect={handleTabSelect}>
          <Nav variant="tabs" className="mb-3">
            <Nav.Item>
              <Nav.Link eventKey="all">Todos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="selling">Vendiendo</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sold">Vendidos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="likes">Me gustas</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="all">
              <Card>
                <Card.Body>
                  <p>Profile information goes here.</p>
                </Card.Body>
              </Card>
            </Tab.Pane>

            <Tab.Pane eventKey="selling">
              <Card>
                <Card.Body>
                  <p>Users posts go here.</p>
                </Card.Body>
              </Card>
            </Tab.Pane>

            <Tab.Pane eventKey="sold">
              <Card>
                <Card.Body>
                  <p>Users photos go here.</p>
                </Card.Body>
              </Card>
            </Tab.Pane>

            <Tab.Pane eventKey="likes">
              <Card>
                <Card.Body>
                  <p>User settings go here.</p>
                </Card.Body>
              </Card>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Col>
    </Row>
  );
}
