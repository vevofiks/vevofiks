"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import debounce from "@/libs/debounce";
import { useAppContext } from "@/context/AppContext";

export default function SwipeablePages({
    children,
    pageI,
}: {
    children: React.ReactNode;
    pageI: number;
}) {
    const { setSwiped } = useAppContext();
    const ele = useRef<HTMLDivElement>(null);
    const pages = ["/", "/about"];
    const router = useRouter();

    // Create debounced navigation once
    const debouncedPush = useCallback(
        debounce((path: string) => {
            router.push(path);
            setSwiped(true)
        }, 300),
        [router]
    );

    // Lock to prevent multiple navigations in one gesture
    const swipeLock = useRef(false);

    const move = useCallback(
        (i: number, value: number) => {
            if (swipeLock.current) return;
            swipeLock.current = true;
            setTimeout(() => {
                swipeLock.current = false;
            }, 500);

            if (ele.current) {
                ele.current.style.transform = `translate(${value}px, 0)`;
                ele.current.style.opacity = "0";
            }
            debouncedPush(pages[i]);
        },
        [debouncedPush, pages]
    );

    useEffect(() => {
        const x = [0, 0];
        const y = [0, 0];
        let dir = false;

        const shouldDo = () => {
            dir = Math.abs(x[0] - x[1]) > Math.abs(y[0] - y[1]);

            if (dir && x[0] > x[1]) {
                if (pages[pageI + 1]) {
                    move(pageI + 1, -50);
                }
            } else if (dir && x[0] < x[1]) {
                if (pages[pageI - 1]) {
                    move(pageI - 1, 50);
                }
            }
        };

        // touch
        const handleTouchStart = (e: TouchEvent) => {
            x[0] = e.touches[0].clientX;
            y[0] = e.touches[0].clientY;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            x[1] = e.changedTouches[0].clientX;
            y[1] = e.changedTouches[0].clientY;
            shouldDo();
        };

        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchend", handleTouchEnd);

        // trackpad / mouse
        const handleWheel = (e: WheelEvent) => {
            if (!e.deltaY && e.cancelable) {
                e.preventDefault();
            }
            if (e.deltaX > 15 && pages[pageI + 1]) {
                move(pageI + 1, -50);
            } else if (e.deltaX < -15 && pages[pageI - 1]) {
                move(pageI - 1, 50);
            }
        };

        ele.current?.addEventListener("wheel", handleWheel, { passive: true });

        return () => {
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
            ele.current?.removeEventListener("wheel", handleWheel);
        };
    }, [move, pageI, pages]);

    return (
        <div
            ref={ele}
            className="select-none overflow-hidden ease-in-out transition-all mb-10 duration-300 will-change-transform"
        >
            {children}
        </div>
    );
}
