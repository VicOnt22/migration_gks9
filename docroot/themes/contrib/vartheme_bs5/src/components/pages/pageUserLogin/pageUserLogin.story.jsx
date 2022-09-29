import config from './pageUserLogin.config.yml';
import navConfig from '../../organisms/nav/basicNav/basicNav.config.yml';
import pageUserLogin from './pageUserLogin.twig';
import navbarBrand from '../../molecules/navbar-brand/navbar-brand.twig';
import nav from '../../organisms/nav/nav.twig';
import footer from '../../organisms/footer/footer.twig';
import block from '../../organisms/block/block.twig';
import twigCode from '!!raw-loader!./pageUserLogin.twig';
import DrupalAttribute from 'drupal-attribute';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import logo from '../../../assets/images/logo.svg';
import '../../../../build/css/theme/betterlogin.theme.css';
import '../../../../build/css/theme/auth-icons.theme.css';

export default {
  title : config.title,
  component: pageUserLogin,
  options: { showPanel: true },
  parameters: {
    docs: {
      container: DocsContainer,
      page: DocsPage,
      source: {code: twigCode},
      description: config.description,
      iframeHeight: config.height
    },
  },
  argTypes: {
    content: {
      content: { control: 'text' }
    }
  }
};

export const PageUserLogin = (args) => {
  return (
    pageUserLogin({
      attributes: new DrupalAttribute(),
      page: {
        navbar_branding: navbarBrand({
          image_path: logo,
          width: 'auto',
          height: 'auto'
        }),
        navbar_right: nav({
          attributes: new DrupalAttribute(),
          items: navConfig.items,
          alignment: 'right',
          utility_classes: []
        }),
        content: config.data.page_content,
        footer: footer({
          content: block({
            title_attributes: new DrupalAttribute(),
            label: '',
            content: config.data.footer_content,
          })
        })
      },
      ...args,
    })
  )
}

PageUserLogin.args = {
};
