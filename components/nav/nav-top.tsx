import FavoriteIcon from '@material-design-icons/svg/outlined/favorite_border.svg'
import HeadsetMicIcon from '@material-design-icons/svg/outlined/headset_mic.svg'
import PersonIcon from '@material-design-icons/svg/outlined/person.svg'
import PinDropIcon from '@material-design-icons/svg/outlined/pin_drop.svg'
import ShoppingBagIcon from '@material-design-icons/svg/outlined/shopping_bag.svg'
import dynamic from 'next/dynamic'
import { memo } from 'react'

import type { LogoProps } from '@/components/logo/logo'
import { NavItem } from '@/components/nav/nav-item'
import { Tablet, Laptop } from '@/lib/media'
import { Button } from '@ui/button/button'
import { IconLabel } from '@ui/icon-label/icon-label'
import { Link } from '@ui/link/link'

const Logo = dynamic<LogoProps>(() =>
  import(/* webpackChunkName: 'common' */ '@/components/logo/logo').then(
    (mod) => mod.Logo
  )
)

export const NavTop = memo(function NavTop() {
  return (
    <div className="flex flex-col px-4 py-2 border-b border-neutral-light laptop:mx-20 laptop:px-0 laptop:pt-8 laptop:pb-0 laptop:mb-5">
      <div className="flex justify-between w-full gap-3 laptop:mb-8">
        <div className="flex items-center">
          <Logo />
        </div>

        <div className="flex gap-48">
          <div className="hidden items-center gap-8 laptop:flex">
            <Link
              href="/support"
              title="Soporte"
              className="can-hover:transition-colors can-hover:hover:text-neutral-dark"
              onClick={(e) => e.preventDefault()}
            >
              <IconLabel
                icon={HeadsetMicIcon}
                label="Soporte"
                labelPosition="right"
                classNameLabel="label-regular"
              />
            </Link>
            <Link
              href="/store-locator"
              title="Ver tiendas"
              className="can-hover:transition-colors can-hover:hover:text-neutral-dark"
              onClick={(e) => e.preventDefault()}
            >
              <IconLabel
                icon={PinDropIcon}
                label="Ver tiendas"
                labelPosition="right"
                classNameLabel="label-regular"
              />
            </Link>
          </div>

          <div className="flex items-center gap-6 laptop:gap-3">
            <Tablet>
              <Button title="Tiendas">
                <IconLabel icon={PinDropIcon} label="Tiendas" />
              </Button>
            </Tablet>
            <Laptop>
              <Button title="Favoritos">
                <IconLabel icon={FavoriteIcon} />
              </Button>
            </Laptop>

            <Button title="Cuenta">
              <Tablet>
                <IconLabel icon={PersonIcon} label="Cuenta" />
              </Tablet>
              <Laptop>
                <IconLabel icon={PersonIcon} />
              </Laptop>
            </Button>

            <Button title="Carrito">
              <Tablet>
                <IconLabel icon={ShoppingBagIcon} label="Carrito" />
              </Tablet>
              <Laptop>
                <IconLabel icon={ShoppingBagIcon} />
              </Laptop>
            </Button>
          </div>
        </div>
      </div>

      <nav className="hidden laptop:block">
        <ul className="hidden gap-6 uppercase laptop:flex">
          <NavItem label="Mujer" href="/catalog/Women" />
          <NavItem label="Hombre" href="/catalog/Men" />
          <NavItem label="Unisex" href="/catalog/Accessories" />
        </ul>
      </nav>
    </div>
  )
})
