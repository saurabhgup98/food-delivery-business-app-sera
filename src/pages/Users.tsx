import React, { useEffect, useRef, useState } from 'react';
import { mockUsersData } from '../data/usersData';
import LeftSection from '../components/Pages/Users/LeftSection';
import MiddleSection from '../components/Pages/Users/MiddleSection';
import RightSection from '../components/Pages/Users/RightSection';
import { USERS_PAGE_STYLES, getUsersPageClasses } from './styles/UsersPageStyles';
import { useScrollHandler, setupScrollListener } from './utils/UsersPageUtils';

const Users: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = useScrollHandler(scrollContainerRef, introRef, setIsSticky);
    const cleanup = setupScrollListener(scrollContainerRef.current, handleScroll);
    return cleanup;
  }, []);

  const pageClasses = getUsersPageClasses(isSticky);

  return (
    <div className={USERS_PAGE_STYLES.main.container}>      
      {/* Scrollable Content Area */}
      <div ref={scrollContainerRef} className={USERS_PAGE_STYLES.main.scrollContainer}>
        <main className={USERS_PAGE_STYLES.main.content}>
          {/* Enhanced Ultra Compact Users Introduction Section */}
          <div ref={introRef} className={USERS_PAGE_STYLES.intro.container}>
            <div className={USERS_PAGE_STYLES.intro.card}>
              {/* Animated background pattern */}
              <div className={USERS_PAGE_STYLES.intro.animatedBg}></div>
              <div className={USERS_PAGE_STYLES.intro.decorativeCircle1}></div>
              <div className={USERS_PAGE_STYLES.intro.decorativeCircle2}></div>
              
              <div className={USERS_PAGE_STYLES.intro.content}>
                {/* Enhanced Icon */}
                <div className={USERS_PAGE_STYLES.icon.container}>
                  <div className={USERS_PAGE_STYLES.icon.animatedBg}></div>
                  <span className={USERS_PAGE_STYLES.icon.emoji}>👥</span>
                </div>
                
                <div className={USERS_PAGE_STYLES.text.container}>
                  <h1 className={USERS_PAGE_STYLES.text.title}>
                    SERA Users Management
                  </h1>
                  <p className={USERS_PAGE_STYLES.text.subtitle}>
                    Admin panel for managing users and customer accounts
                  </p>
                </div>
                
                <div className={USERS_PAGE_STYLES.status.container}>
                  {/* Enhanced Online Status */}
                  <div className={USERS_PAGE_STYLES.status.online.container}>
                    <div className={USERS_PAGE_STYLES.status.online.dot}></div>
                    <span className={USERS_PAGE_STYLES.status.online.text}>Online</span>
                  </div>
                  
                  {/* Enhanced Live Status */}
                  <div className={USERS_PAGE_STYLES.status.live.container}>
                    <div className={USERS_PAGE_STYLES.status.live.dot}></div>
                    <span className={USERS_PAGE_STYLES.status.live.text}>Live</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Users Management with Sticky Behavior */}
          <div className={pageClasses.stickyContainer}>
            <div className={USERS_PAGE_STYLES.grid.container}>
              {/* Left Section - Becomes sticky when intro scrolls behind header */}
              <div className={pageClasses.leftSection}>
                <LeftSection users={mockUsersData.users} />
              </div>
              
              {/* Middle Section - Continues to scroll */}
              <div className={USERS_PAGE_STYLES.grid.middleSection}>
                <MiddleSection 
                  metrics={mockUsersData.metrics}
                  users={mockUsersData.users}
                />
              </div>
              
              {/* Right Section - Becomes sticky when intro scrolls behind header */}
              <div className={pageClasses.rightSection}>
                <RightSection quickActions={mockUsersData.quickActions} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Users;