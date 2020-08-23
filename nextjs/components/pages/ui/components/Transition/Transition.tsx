import React, { ReactElement, useContext, useEffect, useRef } from 'react'
import { CSSTransition as ReactCSSTransition } from 'react-transition-group'

interface ITransitionContextProps {
  parent: {
    show: boolean
    isInitialRender: boolean
    appear?: boolean
  }
}

const TransitionContext = React.createContext<Partial<ITransitionContextProps>>(
  {
    parent: {
      show: false,
      isInitialRender: true,
    },
  },
)

function useIsInitialRender(): boolean {
  const isInitialRender = useRef(true)

  useEffect(() => {
    isInitialRender.current = false
  }, [])

  return isInitialRender.current
}

interface ITransitionProps {
  show?: boolean
  enter?: string
  enterFrom?: string
  enterTo?: string
  leave?: string
  leaveFrom?: string
  leaveTo?: string
  appear?: boolean
  className?: string
  children: React.ReactNode
}

type CSSTransitionProps = ITransitionProps

function CSSTransition({
  show,
  enter = '',
  enterFrom = '',
  enterTo = '',
  leave = '',
  leaveFrom = '',
  leaveTo = '',
  appear,
  className,
  children,
}: CSSTransitionProps): ReactElement {
  const enterClasses = enter.split(' ').filter((s) => s.length)
  const enterFromClasses = enterFrom.split(' ').filter((s) => s.length)
  const enterToClasses = enterTo.split(' ').filter((s) => s.length)
  const leaveClasses = leave.split(' ').filter((s) => s.length)
  const leaveFromClasses = leaveFrom.split(' ').filter((s) => s.length)
  const leaveToClasses = leaveTo.split(' ').filter((s) => s.length)

  function addClasses(node: HTMLElement, classes: string[]): void {
    if (classes.length) {
      node.classList.add(...classes)
    }
  }

  function removeClasses(node: HTMLElement, classes: string[]): void {
    if (classes.length) {
      node.classList.remove(...classes)
    }
  }

  const noderef = React.useRef<HTMLDivElement>(null)

  const addEndListener = (done: () => void): void => {
    noderef.current?.addEventListener('transitionend', done, false)
  }

  const onEnter = (): void => {
    if (noderef.current) {
      addClasses(noderef.current, [...enterClasses, ...enterFromClasses])
    }
  }

  const onEntering = (): void => {
    if (noderef.current) {
      removeClasses(noderef.current, enterFromClasses)
      addClasses(noderef.current, enterToClasses)
    }
  }

  const onEntered = (): void => {
    if (noderef.current) {
      removeClasses(noderef.current, [...enterToClasses, ...enterClasses])
    }
  }

  const onExit = (): void => {
    if (noderef.current) {
      addClasses(noderef.current, [...leaveClasses, ...leaveFromClasses])
    }
  }

  const onExiting = (): void => {
    if (noderef.current) {
      removeClasses(noderef.current, leaveFromClasses)
      addClasses(noderef.current, leaveToClasses)
    }
  }

  const onExited = (): void => {
    if (noderef.current) {
      removeClasses(noderef.current, [...leaveToClasses, ...leaveClasses])
    }
  }

  return (
    <ReactCSSTransition
      appear={appear}
      nodeRef={noderef}
      unmountOnExit={true}
      in={show}
      addEndListener={addEndListener}
      onEnter={onEnter}
      onEntering={onEntering}
      onEntered={onEntered}
      onExit={onExit}
      onExiting={onExiting}
      onExited={onExited}
    >
      <div className={className} ref={noderef}>
        {children}
      </div>
    </ReactCSSTransition>
  )
}

function Transition({ show, appear, ...rest }: ITransitionProps): ReactElement {
  const { parent } = useContext(TransitionContext)
  const isInitialRender = useIsInitialRender()
  const isChild = show === undefined

  if (isChild) {
    return (
      <CSSTransition
        appear={parent ? parent.appear || !parent.isInitialRender : false}
        show={parent?.show ? parent.show : false}
        {...rest}
      />
    )
  }

  return (
    <TransitionContext.Provider
      value={{
        parent: {
          show: !!show,
          isInitialRender,
          appear,
        },
      }}
    >
      <CSSTransition appear={appear} show={show} {...rest} />
    </TransitionContext.Provider>
  )
}

export default Transition
